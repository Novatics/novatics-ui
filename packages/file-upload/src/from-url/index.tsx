import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FromURLContainer } from './styles';

export interface FromUrlProps {
  accept?: string;
  acceptLabels?: string;
  kind?: 'single' | 'combined';
  componentDisabled?: boolean;
  buttonDisabled?: boolean;
  inputDisabled?: boolean;
  onUpload?: (url: string) => void;
}

export function FromUrl(props: FromUrlProps) {
  const {
    accept = '.csv, .xlsx',
    acceptLabels = '.CSV, .XLSX',
    kind = 'single',
    componentDisabled,
    inputDisabled,
    buttonDisabled,
    onUpload = () => {},
  } = props;

  const [url, setUrl] = useState('');

  return (
    <FromURLContainer kind={kind} componentDisabled={componentDisabled}>
      <Typography variant="overline" color="grey.70">
        Upload by URL
      </Typography>

      <Box sx={{ display: 'flex', gap: '8px' }}>
        <TextField
          variant="outlined"
          placeholder="Insert URL here"
          inputProps={{ style: { padding: '8px 16px' } }}
          sx={{ flexGrow: 1 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={inputDisabled || componentDisabled}
        />
        <Button
          variant="outlined"
          disabled={!url || buttonDisabled || componentDisabled}
          sx={{ textTransform: 'capitalize' }}
          onClick={() => onUpload(url)}
        >
          Submit
        </Button>
      </Box>

      <Typography variant="caption" color="grey.70">
        Accepted formats: {acceptLabels}
      </Typography>
    </FromURLContainer>
  );
}
