import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StylesProps {}

const StyledStyles = styled.div`
  color: pink;
`;

export function Styles(props: StylesProps) {
  return (
    <StyledStyles>
      <h1>Welcome to Styles!</h1>
    </StyledStyles>
  );
}

export default Styles;
