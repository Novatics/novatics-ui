import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { FromURLContainer } from './styles';
import { Button } from '../../../button/src/index';

export interface FromUrlProps {
  accept?: string;
  acceptLabels?: string;
  variant?: 'single' | 'combined';
  componentDisabled?: boolean;
  buttonDisabled?: boolean;
  inputDisabled?: boolean;
  onAccept?: (url: string) => void;
  onReject?: (url: string) => void;
  validator?: (url: string) => string | null;
}

export function FromUrl(props: FromUrlProps) {
  const {
    accept,
    acceptLabels,
    variant = 'single',
    componentDisabled,
    inputDisabled,
    buttonDisabled,
    onAccept = () => undefined,
    onReject = () => undefined,
    validator,
  } = props;

  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  const handleValidation = async (url: string): Promise<string | null> => {
    if (validator) return validator(url);
    if (!url) return 'URL is required';
    if (!isValidUrl(url)) return 'Invalid URL';
    if (!accept) return null;

    setLoading(true);
    return fetch(url)
      .then((response) => {
        const type = response.headers.get('Content-Type');
        // How to validate types as audio/*, video/*, image/*?
        setLoading(false);
        if (type && accept.includes(type)) {
          return null;
        } else {
          return 'Invalid file type';
        }
      })
      .catch(() => {
        setLoading(false);
        return 'Validation error';
      });
  };

  const handleSubmit = async () => {
    setError(null);
    const validationResult = await handleValidation(url);
    if (validationResult === null) {
      onAccept(url);
      setUrl('');
    } else {
      onReject(url);
      setError(validationResult);
    }
  };

  return (
    <FromURLContainer variant={variant} componentDisabled={componentDisabled}>
      <Typography variant="overline" color="grey.70">
        Upload by URL
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px' }}>
        <TextField
          variant="outlined"
          placeholder="Insert URL here"
          inputProps={{ style: { padding: '0' } }}
          sx={{ flexGrow: 1 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={inputDisabled || componentDisabled}
        />
        <Button
          variant="outlined"
          disabled={!url || buttonDisabled || componentDisabled}
          sx={{ textTransform: 'capitalize' }}
          onClick={() => handleSubmit()}
          loading={loading}
        >
          Submit
        </Button>
      </Box>

      <Typography
        variant="caption"
        color={error === null ? 'grey.70' : 'error.main'}
      >
        {error === null
          ? acceptLabels
            ? `Accepted formats: ${acceptLabels}`
            : 'All files are accepted'
          : error}
      </Typography>
    </FromURLContainer>
  );
}
