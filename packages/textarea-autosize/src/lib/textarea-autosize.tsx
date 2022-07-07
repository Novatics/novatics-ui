import TextareaAutosizeMui, {
  TextareaAutosizeProps,
} from '@mui/material/TextareaAutosize';

const TextareaAutosize = (props: TextareaAutosizeProps) => (
  <TextareaAutosizeMui {...props} />
);

export { TextareaAutosize };
export default TextareaAutosize;
export * from '@mui/material/TextareaAutosize';
