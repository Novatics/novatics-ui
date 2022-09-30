export interface Step {
  title: string;
  subtitle?: string;
  content: React.ReactNode | string;
  disabled: boolean;
}

export interface HeaderBaseProps {
  step: Step;
}
export interface HeaderProps extends HeaderBaseProps {
  ComponentOverride: React.FC<HeaderBaseProps>;
}

export interface ContentBaseProps {
  content: React.ReactNode | string;
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
