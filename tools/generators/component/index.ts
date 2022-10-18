import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
  installPackagesTask,
  updateJson,
  readProjectConfiguration,
  updateProjectConfiguration,
  TargetConfiguration,
} from '@nrwl/devkit';
import { execSync } from 'child_process';
import sortby from 'lodash.sortby';
import * as fs from 'fs';
import * as util from 'util';

interface ComponentSchemaOptions {
  name: string;
  mui?: boolean;
  buildable?: boolean;
  compiler?: string;
  style?: string;
  configureCypress?: boolean;
  generateCypressSpecs?: boolean;
  generateStories?: boolean;
  baseBranch?: string;
  enforceConventionalCommits?: boolean;
  preset?: 'angular' | 'conventional';
}

function updateCommitZenConfig(tree: Tree, options: { fileName: string }) {
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
    'utf-8'
  );
}

function updateTargetsBuild(targets: Record<string, any>) {
  targets.build = targets.build ?? {};
  targets.build.options = targets.build.options ?? {};
  targets.build.options.format = ['cjs'];
  targets.build.options.buildableProjectDepsInPackageJsonType = 'dependencies';
}

// function updateTargetsBuild(targets: Record<string, any>) {
//   targets.build = targets.build ?? {};
//   targets.build.options = targets.build.options ?? {};
//   targets.build.options.format = ['cjs'];
//   targets.build.options.buildableProjectDepsInPackageJsonType = 'dependencies';
// }

export default async function (tree: Tree, schema: ComponentSchemaOptions) {
  const {
    name,
    mui,
    buildable = true,
    compiler = 'swc',
    style = '@emotion/styled',
    configureCypress = false,
    generateCypressSpecs = false,
    generateStories = true,
    baseBranch = 'master',
    enforceConventionalCommits = true,
    preset = 'conventional',
  } = schema;

  const { className, propertyName, constantName, fileName } = names(name);

  let libArgs = `--compiler=${compiler} --style=${style}`;
  if (buildable) libArgs = '--buildable --publishable' + libArgs;

  const outputLib = execSync(`nx g lib ${libArgs} ${name}`);
  console.log(outputLib.toString());

  let storyArgs = `--configureCypress=${configureCypress} --generateCypressSpecs=${generateCypressSpecs} --generateStories=${generateStories}`;
  const outputStory = execSync(
    `nx g storybook-configuration ${storyArgs} ${fileName}`
  );
  console.log(outputStory.toString());

  let semverArgs = `--baseBranch=${baseBranch} --enforceConventionalCommits=${enforceConventionalCommits} --preset=${preset}`;
  const outputSemver = execSync(
    `nx g @jscutlery/semver:install ${semverArgs} --projects=${fileName}`
  );
  console.log(outputSemver.toString());

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
    }
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
      }
    );

    await formatFiles(tree);
  }

  updateJson(tree, `./packages/${fileName}/project.json`, (json) => {
    json.targets = json.targets ?? {};
    updateTargetsBuild(json.targets);

    return json;
  });

  updateCommitZenConfig(tree, { fileName });

  console.log(`rm ${tree.root}/packages/${name}/src/lib/${name}.stories.tsx`);
  execSync(`rm ${tree.root}/packages/${name}/src/lib/${name}.stories.tsx`);

  return () => {
    installPackagesTask(tree);
  };
}
