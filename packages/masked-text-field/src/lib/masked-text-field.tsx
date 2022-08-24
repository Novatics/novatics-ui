import { TextField } from '@mui/material';
import { AnyMaskedOptions } from 'imask';
import { IMaskInput } from 'react-imask';

// Presets:

// CPF/CNPJ (999.999.999-99 | 99.999.999/9999-99)
// CPF (999.999.999-99)
// CNPJ (99.999-999)
// CEP (99.999-999)
// TELEFONE (+99 (99) 99999-9999)
// PLACA (AAA-9999) *
// PLACA (AAA-AAAA) *
// CARTAO (9999 9999 9999 9999)

interface IMaskedProp {
  mask: string;
  maxLength?: number;
  lazy?: boolean;
  autofix?: boolean;
  to?: number;
  from?: number;
}
interface IMaskedProps {
  mask: string | IMaskedProp[];
  definitions: {
    [key: string]: string | RegExp | (() => void);
  };
}

type MaskPreset = 'cpf' | 'cnpj' | 'cpf-cnpj' | 'cep' | 'zipcode' | 'phone' | 'card-number';

export interface MaskedTextFieldProps {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  maskPreset?: MaskPreset;
  placeholder?: string;
  iMaskProps?: IMaskedProps;
}

const MASK_TYPES: { [key: string]: AnyMaskedOptions } = {
  'cpf': {
    mask: '000.000.000-00'
  },
  'cnpj': {
    mask: '00.000.000/0000-00'
  },
  'cpf-cnpj': {
    mask: [
      { mask: '000.000.000-00', maxLength: 11 },
      { mask: '00.000.000/0000-00' },
    ],
  },
  'cep': {
    mask: '00000-000',
  },
  'zipcode': {
    mask: '00000-0000',
  },
  'phone': {
    mask: '(#00) 000-0000',
    definitions: {
      '#': /[1-9]/,
    },
  },
  'card-number': {
    mask: '0000 0000 0000 0000',
  },
};

function TextMaskCustom(props: MaskedTextFieldProps) {
  // console.log('TextMaskCustom', props);
  const { onChange, maskPreset = 'phone', ...other } = props;
  const { mask, ...rest  } = MASK_TYPES[maskPreset] as AnyMaskedOptions ;
  return (
    <IMaskInput
      {...other}
      {...rest}
      mask={mask}
      onAccept={(value: any) => {
        // onChange({ target: { name: props.name, value } });
      }}
      overwrite
    />
  );
}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { value, maskPreset, placeholder, onChange, iMaskProps, ...rest } = props;

  console.log('MaskedTextField', props);
  const handleOnChangeEvent = (value: any) => {
    onChange(value);
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
      inputProps={{ maskPreset, iMaskProps }}
      variant="standard"
    />
  );
}

export default MaskedTextField;
