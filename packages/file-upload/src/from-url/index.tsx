import { useState, useEffect } from 'react';
import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { FromURLContainer } from './styles';
import { Button, ButtonProps } from '@novatics/button';

export interface FromUrlProps {
  acceptLabels?: string;
  variant?: 'single' | 'combined';
  disabled?: boolean;
  buttonProps?: ButtonProps;
  textFieldProps?: TextFieldProps;
  error?: string;
  onAccept?: (url: string) => void;
  onReject?: (url: string) => void;
  handleValidation?: (url: string) => string | null;
  clearOnAccept?: boolean;
  title?: string;
  buttonLabel?: string;
  formatsLabel?: string;
  placeholder?: string;
}

export function FromUrl(props: FromUrlProps) {
  const {
    acceptLabels,
    variant = 'single',
    disabled,
    buttonProps,
    textFieldProps,
    onAccept = () => undefined,
    onReject = () => undefined,
    handleValidation,
    error,
    clearOnAccept = true,
    title = 'Upload by URL',
    buttonLabel = 'Submit',
    formatsLabel = 'Accepted formats:',
    placeholder = 'Insert URL here',
  } = props;

  const [url, setUrl] = useState('');
  const [errorText, setErrorText] = useState<string>(error || '');

  useEffect(() => {
    if (error) setErrorText(error);
  }, [error]);

  function isValidUrl(urlString: string) {
    try {
      return Boolean(new URL(urlString));
    } catch (err) {
      return false;
    }
  }

  const validate = (url: string): string | null => {
    if (handleValidation) return handleValidation(url);
    if (!url) return 'URL is required';
    if (!isValidUrl(url)) return 'Invalid URL';
    return null;
  };

  const handleSubmit = () => {
    setErrorText('');
    const validationResult = validate(url);
    if (validationResult === null) {
      onAccept(url);
      if (clearOnAccept) setUrl('');
    } else {
      onReject(url);
      setErrorText(validationResult);
    }
  };

  return (
    <FromURLContainer variant={variant} disabled={disabled}>
      <Typography variant="overline" color="grey.70">
        {title}
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px' }}>
        <TextField
          variant="outlined"
          placeholder={placeholder}
          error={Boolean(errorText)}
          inputProps={{ style: { padding: '0' } }}
          sx={{ flexGrow: 1 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={disabled}
          {...textFieldProps}
        />
        <Button
          variant="outlined"
          disabled={!url || disabled}
          sx={{ textTransform: 'capitalize' }}
          onClick={() => handleSubmit()}
          {...buttonProps}
        >
          {buttonLabel}
        </Button>
      </Box>

      <Typography
        variant="caption"
        color={errorText ? 'error.main' : 'grey.70'}
      >
        {errorText
          ? errorText
          : acceptLabels
          ? `${formatsLabel} ${acceptLabels}`
          : 'All files are accepted'}
      </Typography>
    </FromURLContainer>
  );
}
