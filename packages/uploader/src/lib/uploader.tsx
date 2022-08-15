import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UploaderProps {}

const StyledUploader = styled.div`
  color: pink;
`;

export function Uploader(props: UploaderProps) {
  return (
    <StyledUploader>
      <h1>Welcome to Uploader!</h1>
    </StyledUploader>
  );
}

export default Uploader;
