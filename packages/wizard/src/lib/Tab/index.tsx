import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';

import { Container, TextContainer } from './styles';
import { TabProps } from '../types';

const Tab = (props: TabProps) => {
  const { step, isCompleted, showCompleted, TabOverride, isActive } = props;

  const { components, title, subtitle, disabled, ...others } = step;

  const tabOverrideProps = { ...props };
  delete tabOverrideProps.TabOverride;

  const disabledTextColor = disabled ? 'gray' : '';

  if (components?.Tab) {
    return components.Tab({
      step: { title, subtitle, disabled, isActive, ...others },
    });
  }

  if (TabOverride) {
    return <TabOverride {...tabOverrideProps} />;
  }

  return (
    <Container disabled={disabled} showCompleted={isCompleted && showCompleted}>
      <TextContainer>
        <Typography variant="body1" color={disabledTextColor}>
          {title ? title : ''}
        </Typography>
        <Typography variant="subtitle2" color={disabledTextColor}>
          {subtitle ? subtitle : ''}
        </Typography>
      </TextContainer>

      <CheckIcon
        style={{ marginLeft: '20px', marginRight: '10px' }}
        fontSize="small"
        color="success"
      />
    </Container>
  );
};

export default Tab;
