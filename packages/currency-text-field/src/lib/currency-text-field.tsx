import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

/* eslint-disable-next-line */
export interface CurrencyTextFieldProps {}

const StyledCurrencyTextField = styled.div`
  color: pink;
`;

export function CurrencyTextField(props: CurrencyTextFieldProps) {
  const { value, onChange } = props;
  const inputValue = value.parse
  const internalOnChange = (textfieldvalue) => {
    // 123,45 > R$ 123,45
    onChange(newValue)

  }
  return (
    <div>
      <TextField value={inputValue} onChange={
        (textfieldvalue) => {
          // 123,456 > R$ 123,45
          123456
          onChange(newValue)
      
        }
      } />
    </div>
  );
}

export default CurrencyTextField;
