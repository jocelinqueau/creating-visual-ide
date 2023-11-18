import { SandpackBundlerFiles, useFileExplorerSandpack } from "@/hooks/useFileExplorerSandpack"
import { css, cx } from "@/styled-system/css";
import { ModuleList } from "./module-list";

const FileExplorer = () => {
  const { activeFile, files, status, visibleFilesFromProps } = useFileExplorerSandpack()

  const orderedFiles = Object.keys(files)
    .sort()
    .reduce<SandpackBundlerFiles>((obj, key) => {
      obj[key] = files[key];
      return obj;
    }, {});

  return (
    <div className={cx('file-explorer', css({
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
          backgroundColor: "surface1",
          gap: 1, // border between components
        }))}>
      <div
        className={cx('file-explorer-list', css({
            padding: 3, // space3 is 12px
            overflow: "auto",
            height: "100%",
        }))}
      >
        <ModuleList />
      </div>
    </div>
  )
}

export default FileExplorer