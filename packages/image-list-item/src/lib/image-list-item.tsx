import ImageListItemMui, {
  ImageListItemProps,
} from '@mui/material/ImageListItem';

const ImageListItem = (props: ImageListItemProps) => (
  <ImageListItemMui {...props} />
);

export { ImageListItem };
export default ImageListItem;
export * from '@mui/material/ImageListItem';
