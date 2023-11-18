import { FileIcon } from "@/icons/file-icon";
import { DirectoryIconClosed, DirectoryIconOpen } from "@/icons/directory";

interface FileProps {
  isDirOpen: boolean;
}

const File = ({isDirOpen}:FileProps) => {

  const getIcon = () => {
    return isDirOpen ? <DirectoryIconOpen /> : <DirectoryIconClosed />;

  }
  return (
    <button>
      {getIcon()}
    </button>
  )
};

export default File;