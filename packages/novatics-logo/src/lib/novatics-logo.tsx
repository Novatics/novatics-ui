import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface NovaticsLogoProps {}

const StyledNovaticsLogo = styled.div`
  color: pink;
`;

export function NovaticsLogo(props: NovaticsLogoProps) {
  return (
    <StyledNovaticsLogo>
      <h1>Welcome to NovaticsLogo!</h1>
    </StyledNovaticsLogo>
  );
}

export default NovaticsLogo;
