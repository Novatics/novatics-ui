interface Components {
  Header?: React.FC;
  Content?: React.FC;
  Footer?: React.FC;
}
export interface Step {
  title: string;
  subtitle?: string;
  content: React.ReactNode | string;
  disabled: boolean;
  components?: Components;
}

export interface HeaderBaseProps {
  step: Step;
}
export interface HeaderProps extends HeaderBaseProps {
  ComponentOverride: React.FC<HeaderBaseProps>;
}

export interface ContentBaseProps {
  step: Step;
}
export interface ContentProps extends ContentBaseProps {
  ComponentOverride: React.FC<ContentBaseProps>;
}

export interface FooterBaseProps {
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
  backText?: string;
  nextText?: string;
  finishText?: string;
  isFirst: boolean;
  isLast: boolean;
  step: Step;
}
export interface FooterProps extends FooterBaseProps {
  ComponentOverride: React.FC<FooterBaseProps>;
}

export interface TabBaseProps {
  step: Step;
  isComplete: boolean;
  showCompleted: boolean;
}
export interface TabProps extends TabBaseProps {
  TabOverride?: React.FC<TabBaseProps>;
}
