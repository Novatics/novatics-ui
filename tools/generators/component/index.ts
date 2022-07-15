import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
  installPackagesTask,
} from '@nrwl/devkit';
import { execSync } from 'child_process';

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
  if (buildable) libArgs = '--buildable ' + libArgs;

  const outputLib = execSync(`nx g lib ${libArgs} ${name}`);
  console.log(outputLib.toString());

  let storyArgs = `--configureCypress=${configureCypress} --generateCypressSpecs=${generateCypressSpecs} --generateStories=${generateStories}`;
  const outputStory = execSync(
    `nx g storybook-configuration ${storyArgs} ${fileName}`
  );
  console.log(outputStory.toString());

  if (mui) {
    console.log("installing @mui/material @emotion/react @emotion/styled...");
    const outputDependencies = execSync(
      `cd ./packages/${fileName} && yarn add @mui/material @emotion/react @emotion/styled`
    );
    console.log(outputDependencies.toString());

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

  return () => {
    installPackagesTask(tree);
  };
}
