import { Linter } from '@nrwl/linter';

export type SupportedStyles =
  | 'css'
  | 'scss'
  | 'styl'
  | 'less'
  | 'styled-components'
  | '@emotion/styled'
  | 'styled-jsx'
  | 'none';

export interface ComponentSchemaOptions {
  name: string;
  'materia-ui'?: boolean;
  buildable?: boolean;
  compiler?: 'babel' | 'swc';
  style: SupportedStyles;
  skipFormat: boolean;
  directory?: string;
  tags?: string;
  unitTestRunner: 'jest' | 'none';
  /**
   * @deprecated
   */
  babelJest?: boolean;
  e2eTestRunner: 'cypress' | 'none';
  linter: Linter;
  pascalCaseFiles?: boolean;
  classComponent?: boolean;
  routing?: boolean;
  skipWorkspaceJson?: boolean;
  js?: boolean;
  globalCss?: boolean;
  strict?: boolean;
  setParserOptionsProject?: boolean;
  standaloneConfig?: boolean;
  remotes?: string[];
  devServerPort?: number;
}
