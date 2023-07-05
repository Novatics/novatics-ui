import { useEffect, useMemo, useCallback, useState } from 'react';
import { TextField } from '@mui/material';
import IMask, { AnyMaskedOptions } from 'imask';
import { MaskPreset, MASK_PRESETS } from './mask-presets';

export interface MaskedTextFieldProps {
  onChange: (value: string) => void;
  initialValue?: string;
  iMaskProps?: AnyMaskedOptions;
  maskPreset?: MaskPreset;
  outputFormat?: 'masked' | 'unmasked';
}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const {
    maskPreset,
    iMaskProps,
    initialValue = '',
    onChange,
    outputFormat = 'unmasked',
    ...rest
  } = props;
  const [maskedValue, setMaskedValue] = useState('');

  const maskOptions = useMemo(() => {
    if (maskPreset) {
      return MASK_PRESETS[maskPreset];
    }
    if (iMaskProps) {
      return iMaskProps;
    }
    return {
      mask: String,
    };
  }, [iMaskProps, maskPreset]);

  const masked = useMemo(() => IMask.createMask(maskOptions), [maskOptions]);

  useEffect(() => {
    if (initialValue) {
      masked.resolve(initialValue.toString());
      setMaskedValue(masked.value);
    }
  }, [masked, initialValue]);

  const maskInput = useCallback(
    (stgValue: string) => {
      masked.resolve(stgValue);
      const onChangeValue =
        outputFormat === 'unmasked' ? masked.unmaskedValue : masked.value;
      onChange(onChangeValue || '');
      setMaskedValue(masked.value);
    },
    [masked, outputFormat, onChange],
  );

  return (
    <TextField
      value={maskedValue}
      onChange={(e) => maskInput(e.target.value)}
      {...rest}
    />
  );
}

export default MaskedTextField;
