import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
  installPackagesTask,
  updateJson,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { execSync } from 'child_process';
import * as sortby from 'lodash.sortby';
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

  if (mui) {
    generateFiles(
      // virtual file system
      tree,

      // the location where the template files are
      joinPathFragments(__dirname, './files'),

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
    json.targets.build = json.targets.build ?? {};
    json.targets.build.options = json.targets.build.options ?? {};
    json.targets.build.options.format = ['cjs'];
    json.targets.build.options.buildableProjectDepsInPackageJsonType =
      'dependencies';
    return json;
  });

  updateCommitZenConfig(tree, { fileName });

  return () => {
    installPackagesTask(tree);
  };
}
