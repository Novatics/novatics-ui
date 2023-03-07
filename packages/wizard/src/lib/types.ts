import { FC, ReactNode } from 'react';
interface Components {
  Header?: FC;
  Content?: FC;
  Footer?: FC;
  Tab?: FC;
}
export interface Step {
  title: string;
  subtitle?: string;
  content: ReactNode | string;
  disabled: boolean;
  components?: Components;
  status?: 'completed' | 'pending' | undefined;
}

export interface HeaderBaseProps {
  step: Step;
}
export interface HeaderProps extends HeaderBaseProps {
  ComponentOverride: FC<HeaderBaseProps>;
}

export interface ContentBaseProps {
  step: Step;
}
export interface ContentProps extends ContentBaseProps {
  ComponentOverride: FC<ContentBaseProps>;
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
  ComponentOverride: FC<FooterBaseProps>;
}

export interface TabBaseProps {
  isActive: boolean;
  step: Step;
  isCompleted: boolean;
  showCompleted: boolean;
}
export interface TabProps extends TabBaseProps {
  TabOverride?: FC<TabBaseProps>;
}
