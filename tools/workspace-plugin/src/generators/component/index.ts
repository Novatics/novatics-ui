import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
  installPackagesTask,
  updateJson,
} from '@nx/devkit';
import { execSync } from 'child_process';
import sortby from 'lodash.sortby';
import * as fs from 'fs';
import * as util from 'util';

interface ComponentSchemaOptions {
  project?: string;
  name: string;
  mui?: boolean;
  buildable?: boolean;
  bundler?: string;
  compiler?: string;
  style?: string;
  configureCypress?: boolean;
  generateCypressSpecs?: boolean;
  generateStories?: boolean;
  baseBranch?: string;
  enforceConventionalCommits?: boolean;
  preset?: 'angular' | 'conventional';
  access?: 'public' | 'restricted';
  storybook7Configuration?: boolean;
  tsConfiguration?: boolean;
  generator?: string;
}

function updateCommitZenConfig(tree: Tree, options: { fileName: string }) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const czConf = require(`${tree.root}/.cz-config.js`);
  const newCzConf = { ...czConf };
  const { fileName } = options;
  const [root, core, release, ...rest] = newCzConf.scopes;

  const scopes = rest.filter((e) => e.name !== fileName);
  scopes.push({ name: fileName });
  newCzConf.scopes = [root, core, release, ...sortby(scopes, 'name')];

  fs.writeFileSync(
    `${tree.root}/.cz-config.js`,
    'module.exports = ' + util.inspect(newCzConf),
    'utf-8',
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateTargetsBuild(targets: Record<string, any>) {
  targets.build = targets.build ?? {};
  targets.build.options = targets.build.options ?? {};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateTargetsVersion(targets: Record<string, any>) {
  targets.version = { ...targets.version } ?? {};
  targets.version.executor = '@jscutlery/semver:version';
  targets.version.options = targets.version.options ?? {};
  targets.version.options.preset = 'conventional';
  targets.version.options.baseBranch = 'master';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateTargetsTest(targets: Record<string, any>, fileName: string) {
  targets.test = targets.test ?? {};
  targets.test.options = targets.test.options ?? {};
  targets.test.options.config = `packages/${fileName}/vitest.config.ts`;
}

function createTargetsVersionDeploy(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  targets: Record<string, any>,
  fileName: string,
) {
  targets['version:deploy'] = { ...targets['version:deploy'] } ?? {};
  targets['version:deploy'].executor = '@jscutlery/semver:version';
  targets['version:deploy'].options = targets['version:deploy'].options ?? {};
  targets['version:deploy'].options.preset = 'conventional';
  targets['version:deploy'].options.baseBranch = 'master';
  targets['version:deploy'].options.postTargets = [`${fileName}:deploy`];
}

export default async function (tree: Tree, schema: ComponentSchemaOptions) {
  const {
    project = '@novatics-ui',
    name,
    mui,
    buildable = true,
    bundler = 'vite',
    compiler = 'swc',
    style = '@emotion/styled',
    configureCypress = false,
    generateCypressSpecs = false,
    generateStories = false,
    baseBranch = 'master',
    enforceConventionalCommits = true,
    preset = 'conventional',
    access = 'public',
    storybook7Configuration = true,
    tsConfiguration = true,
    generator = '@nx/react:library',
  } = schema;

  const { className, propertyName, constantName, fileName } = names(name);

  console.log(className, propertyName, constantName, fileName);

  // throw new Error()

  let libArgs = `--compiler=${compiler} --style=${style} --bundler=${bundler} --importPath=${project}/${fileName}`;
  if (buildable) libArgs = '--publishable ' + libArgs;

  const outputLib = execSync(`nx g ${generator} ${libArgs} ${name}`);
  console.log(outputLib.toString());

  const outputCypressConfig = execSync(
    `nx g @nx/react:cypress-component-configuration  --project=${fileName}`,
  );
  console.log(outputCypressConfig.toString());

  const storyArgs = `--configureCypress=${configureCypress} --generateCypressSpecs=${generateCypressSpecs} --generateStories=${generateStories} --storybook7Configuration=${storybook7Configuration} --tsConfiguration=${tsConfiguration}`;
  const outputStory = execSync(
    `nx g storybook-configuration ${storyArgs} ${fileName}`,
  );
  console.log(outputStory.toString());

  const semverArgs = `--baseBranch=${baseBranch} --enforceConventionalCommits=${enforceConventionalCommits} --preset=${preset}`;
  const outputSemver = execSync(
    `nx g @jscutlery/semver:install ${semverArgs} --projects=${fileName}`,
  );
  console.log(outputSemver.toString());

  const ngxDeployArgs = `--access=${access}`;
  const outputNgxDeploy = execSync(
    `nx g ngx-deploy-npm:install ${ngxDeployArgs} --projects=${fileName}`,
  );
  console.log(outputNgxDeploy.toString());

  generateFiles(
    // virtual file system
    tree,

    // the location where the template files are
    joinPathFragments(__dirname, './files/commom'),

    // where the files should be generated
    `./packages/${fileName}`,

    // the variables to be substituted in the template
    {
      name,
      className,
      propertyName,
      constantName,
      fileName,
      tmpl: '',
    },
  );

  await formatFiles(tree);

  if (mui) {
    generateFiles(
      // virtual file system
      tree,

      // the location where the template files are
      joinPathFragments(__dirname, './files/MUIbased'),

      // where the files should be generated
      `./packages/${fileName}`,

      // the variables to be substituted in the template
      {
        name,
        className,
        propertyName,
        constantName,
        fileName,
        tmpl: '',
      },
    );

    await formatFiles(tree);
  }

  updateJson(tree, `./packages/${fileName}/project.json`, (json) => {
    json.targets = json.targets ?? {};
    updateTargetsBuild(json.targets);
    updateTargetsVersion(json.targets);
    createTargetsVersionDeploy(json.targets, fileName);
    updateTargetsTest(json.targets, fileName);

    return json;
  });

  updateCommitZenConfig(tree, { fileName });

  return () => {
    installPackagesTask(tree);
  };
}
