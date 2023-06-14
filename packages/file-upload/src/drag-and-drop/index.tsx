export interface DragAndDropProps {
  onDrop: (files: File[]) => void;
}

export function DragAndDrop(props: DragAndDropProps) {
  return <div>drag-and-drop</div>;
}
