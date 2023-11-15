
import { useState } from "react"
import { css } from "../../styled-system/css"
import { X } from 'lucide-react';

const FileTabs = () => {
  const [activeFile, setActiveFile] = useState("/foo/App.js")
  const files = {
    "/foo/App.js": "",
    "/App.js": "",
    "/baz/App.js": "",
  }

  const filePaths = Object.keys(files)

  return (
    <div
      data-is="tabs"
      className={css({
        borderBottom: "1px solid",
        borderBottomColor: "border1",
        background: "surface2"
      })}
    >
      <div
        aria-label="Select active file"
        className={css({
          overflow: "auto",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "stretch",
          minHeight: "40px",
          marginBottom: "-1px",
          py: 0,
          px: 2,
          columnGap: 2
        })}
      >
        {filePaths.map((filePath) => {
          const filename = filePath.split("/").at(-1);
          const selected = filePath === activeFile
          return (
            <button
              key={filePath}
              aria-selected={selected}
              className={css({
                color: 'accent',
                opacity: selected ? 1 : 0.7,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                _hover: {
                  opacity: 1,
                }
              })}
              onClick={() => setActiveFile(filePath)}
            >
              {filename}
              <X size={16} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FileTabs