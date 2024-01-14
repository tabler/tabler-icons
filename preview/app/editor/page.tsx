import { Editor } from '@/components/Editor';
import { getAllIcons } from '@/lib/icons';

export default async function EditorPage() {
  const icons = await getAllIcons();;

  return (
    <Editor icons={icons} />
  );
}
