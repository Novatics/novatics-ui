import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CoreProps {}

const StyledCore = styled.div`
  color: pink;
`;

export function Core(props: CoreProps) {
  return (
    <StyledCore>
      <h1>Welcome to Core Tyestedasd!</h1>
    </StyledCore>
  );
}

export default Core;
