import { AnyMaskedOptions } from 'imask';

export type MaskPreset =
  | 'cpf'
  | 'cnpj'
  | 'cpf-cnpj'
  | 'cep'
  | 'zipcode'
  | 'phone'
  | 'card-number';

export const MASK_PRESETS: { [key: string]: AnyMaskedOptions } = {
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
    mask: '00.000-000',
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
