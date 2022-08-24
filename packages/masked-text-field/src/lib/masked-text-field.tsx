import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
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

type AnyMask = AnyMaskedOptions['mask'];

interface IMaskedProps {
  mask: AnyMask;
  definitions: {
    [key: string]: string | RegExp | (() => void);
  };
}

type MaskPreset =
  | 'cpf'
  | 'cnpj'
  | 'cpf-cnpj'
  | 'cep'
  | 'zipcode'
  | 'phone'
  | 'card-number';

export type MaskedTextFieldProps = TextFieldProps & {
  maskPreset?: MaskPreset;
  iMaskProps?: IMaskedProps;
};

export interface TextMaskCustomProps
  extends Omit<MaskedTextFieldProps, 'onChange'> {
  onChange: (event: { target: { value: string } }) => void;
}

const MASK_TYPES: { [key: string]: AnyMaskedOptions } = {
  cpf: {
    mask: '000.000.000-00',
  },
  cnpj: {
    mask: '00.000.000/0000-00',
  },
  'cpf-cnpj': {
    mask: [
      { mask: '000.000.000-00', maxLength: 11 },
      { mask: '00.000.000/0000-00' },
    ],
  },
  cep: {
    mask: '00000-000',
  },
  zipcode: {
    mask: '00000-0000',
  },
  phone: {
    mask: '(#00) 000-0000',
    definitions: {
      '#': /[1-9]/,
    },
  },
  'card-number': {
    mask: '0000 0000 0000 0000',
  },
};

const TextMaskCustom = forwardRef<HTMLElement, TextMaskCustomProps>(
  (props, ref) => {
    const { onChange, maskPreset, ...other } = props;
    const maskProps = maskPreset ? MASK_TYPES[maskPreset] : undefined;
    return (
      // @ts-expect-error IMask have a complex combination of types. It will be better to ignore the type checking for now
      <IMaskInput
        ref={ref}
        {...maskProps}
        {...other}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onAccept={(value: any) => onChange({ target: { value } })}
        overwrite
      />
    );
  }
);

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { maskPreset, iMaskProps, InputProps, inputProps, ...rest } = props;

  return (
    <TextField
      InputProps={{
        // @ts-expect-error Need to mimic a InputBase component
        inputComponent: TextMaskCustom,
        ...InputProps,
      }}
      inputProps={{ maskPreset, iMaskProps, ...inputProps }}
      {...rest}
    />
  );
}

export default MaskedTextField;
