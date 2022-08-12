import { TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';
import { forwardRef, useRef } from 'react';

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
  value: string;
  mask:
    | 'cpf'
    | 'cnpj'
    | 'cpf-cnpj'
    | 'cep'
    | 'zipcode'
    | 'phone'
    | 'card-number';
  placeholder: string;
  onChange: any;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    // const ref = useRef(null);
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value, mask, placeholder, ...rest } = props;

  const handleOnChangeEvent = (value: any) => {
    console.log('value => ', value);
  };

  return (
    <TextField
      label="react-number-format"
      value={value}
      onChange={handleOnChangeEvent as any}
      name="numberformat"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: TextMaskCustom as any,
      }}
      variant="standard"
    />
  );
}

export default MaskedTextField;
