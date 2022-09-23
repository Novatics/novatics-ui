export interface Step {
    title: string;
    subtitle?: string;
    content: React.ReactNode | string;
    disabled: boolean;
}

export interface HeaderOverrideProps {
    step: Step;
}

export interface HeaderProps {
  step: Step;
  ComponentOverride: React.FC<HeaderOverrideProps>;
}

export interface FooterOverrideProps {
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
  backText?: string;
  nextText?: string;
  finishText?: string;
  isFirst: boolean;
  isLast: boolean;
}

export interface FooterProps {
  handleBack: () => void;
  handleNext: () => void;
  handleFinish: () => void;
  backText?: string;
  nextText?: string;
  finishText?: string;
  isFirst: boolean;
  isLast: boolean;
  ComponentOverride: React.FC<FooterOverrideProps>;
}


export interface ContentOverrideProps {
  content: React.ReactNode | string;
}


export interface ContentProps {
  content: React.ReactNode | string;
  ComponentOverride: React.FC<ContentOverrideProps>;
}

export interface TabOverrideProps {
  step: Step;
  isComplete: boolean;
  showCompleted: boolean;
}
export interface TabProps {
  step: Step;
  isComplete: boolean;
  showCompleted: boolean;
  TabOverride?: React.FC<TabOverrideProps>;
}
