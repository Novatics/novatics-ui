import { TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

// Presets:

// CPF/CNPJ (999.999.999-99 | 99.999.999/9999-99)
// CPF (999.999.999-99)
// CNPJ (99.999-999)
// CEP (99.999-999)
// TELEFONE (+99 (99) 99999-9999)
// PLACA (AAA-9999) *
// PLACA (AAA-AAAA) *
// CARTAO (9999 9999 9999 9999)

// interface iMaskedProps {
//     mask: string ;
//     definitions: {
//       [key: string]
//     }
// }

export interface MaskedTextFieldProps {
  value: string;
  maskType:
    | 'cpf'
    | 'cnpj'
    | 'cpf-cnpj'
    | 'cep'
    | 'zipcode'
    | 'phone'
    | 'card-number';
  placeholder: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
const MASK_TYPES = {
  phone:  {
    mask: "(#00) 000-0000",
    definitions: {
      '#': /[1-9]/,
    }
  }
}
function TextMaskCustom(props: CustomProps) {
    const { onChange, maskType, ...other } = props;
    const { mask,  definitions } = MASK_TYPES[maskType];
    return (
      <IMaskInput
        {...other}
        mask={mask}
        definitions={definitions}
        onAccept={(value: any) =>
        {
          onChange({ target: { name: props.name, value } })
        }
        }
        overwrite
      />
    );
}


export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value, mask, placeholder, onChange, ...rest } = props;

  const handleOnChangeEvent = (value: any) => {
    console.log('value => ', value);
    onChange(value)
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
