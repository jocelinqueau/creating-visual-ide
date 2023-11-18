import { css } from "@/styled-system/css"
import { useState } from "react"

const FileTabs = () => {
  const [activeFile, setActiveFile] = useState("/App.tsx")
  const files = {
    "/index.tsx": "",
    "/App.tsx": "",
    "/Button.tsx": "",
  }

  const filePaths = Object.keys(files)

  return (
    <div className={css({
      backgroundColor: "surface2",
      border: `1px solid token(colors.surface2)`,
      px: 1,
    })}>

      <div
        className={css({
          bg: 'surface1',
          px: 2,
          width: 'max-content'
        })}
      >
        {filePaths.map((filePath) => {
          const filename = filePath.split("/").at(-1);
          const selected = filePath === activeFile
          return (
            <button
              data-active={selected}
              onClick={() => setActiveFile(filePath)}
              className={css({
                color: selected ? 'accent' : 'clickable',
                px: 2,
                py: 2,
                cursor: "pointer",
                bg: 'surface1',
                whiteSpace: "nowrap",
                textTransform: "lowercase",
                '&:hover:not([data-active="true"])': {
                  color: 'hover'
                }
              })}
            >
              {filename}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FileTabs