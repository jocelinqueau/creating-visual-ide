
import { useState } from "react"
import {css, cx} from '@/styled-system/css'
import { token } from '@/styled-system/tokens'
import { X } from 'lucide-react';

// appearance: none | auto | initial | inherit | icon | window | button | menu | field | desktop | workspace | document | tooltip | dialogue | push-button | hyperlink | radio-button | checkbox | menu-item | tab | menubar | outline-tree | range | signature | password;
const buttonRecipe = css({
  appearance: "none", // not really to sure about this props
  outline: "none", 
  display: "flex",
  alignItems: "center", // center horizontally
  fontSize: "inherit",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  transition: `color ${token('transitions.default')}, background ${token('transitions.default')}`,
  cursor: "pointer",
  color: 'clickable',
  border: 0,
  textDecoration: "none",
  _disabled: {
    color: 'disabled',
  },
  _hover: {
    color: 'hover'
  },

  '& svg' : {
    width: 4,
    height: 4,
  }
})

const tabButton = css({
  paddingY: 2,
  height: token('size.headerHeight'),
  whiteSpace: "nowrap",
  '&:focus':{
    outline: "none"
  }
})


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
        borderBottom: "1px solid surface2",
        background: "surface1"
      })}
    >
      <div
        aria-label="Select active file"
        role="tablist"
        className={css({
          overflow: "auto",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "stretch",
          minHeight: "40px",
          marginBottom: "-1px",
          px: 2,
        })}
      >
        {filePaths.map((filePath) => {
          const filename = filePath.split("/").at(-1);
          const selected = filePath === activeFile
          return (
            <button
              key={filePath}
              aria-selected={selected}
              className={cx(
                buttonRecipe,
                tabButton,
                css({
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
                })
              )}
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