import { JSX } from '@emotion/react/jsx-runtime';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask from "react-input-mask";


// Presets:

// CPF/CNPJ (999.999.999-99 | 99.999.999/9999-99)
// CPF (999.999.999-99)
// CNPJ (99.999-999)
// CEP (99.999-999)
// TELEFONE (+99 (99) 99999-9999)
// PLACA (AAA-9999) *
// PLACA (AAA-AAAA) *
// CARTAO (9999 9999 9999 9999)


/* eslint-disable-next-line */
export interface MaskedTextFieldProps {
  value: string | number;
  mask: 'cpf' | 'cnpj' | 'cpf-cnpj' | 'cep' | 'zipcode' | 'phone' | 'card-number';
  placeholder: string;
}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value, mask, placeholder, ...rest } = props;

  const handleOnChangeEvent = (value: string | number) => {
    console.log("value => ", value);
  }

  return (
    <InputMask
      mask={"(99) 99999-9999"}
      value={value}
      onChange={(event) => handleOnChangeEvent(event.target.value)}
    >
      { (inputProps: JSX.IntrinsicAttributes & JSX.LibraryManagedAttributes<(props: TextFieldProps) => JSX.Element, TextFieldProps>) => <TextField {...inputProps } /> }

    </InputMask>
  );
}

export default MaskedTextField;
