import { IconWrapper } from "@/components/icon-wrapper"
import { css, cx } from "@/styled-system/css"
import { hstack } from "@/styled-system/patterns"
import { token } from "@/styled-system/tokens"
import { useState } from "react"

interface FolderItemProps {
  label: string
  isOpen: boolean
}

const SVG: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    fill="currentColor"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

const DirectoryIconOpen = () => (
  <SVG>
    <title>Directory</title>
    <path
      d="M12.5526 12.6667H3.66675C3.2922 12.6667 2.96575 12.4608 2.79442 12.156L3.81072 8.0908C3.92201 7.64563 4.32199 7.33333 4.78086 7.33333H13.386C14.0365 7.33333 14.5139 7.94472 14.3561 8.57587L13.5228 11.9092C13.4115 12.3544 13.0115 12.6667 12.5526 12.6667Z"
      fill="currentColor"
    />
    <path
      d="M13.3334 6.63333V6.33333C13.3334 5.78105 12.8857 5.33333 12.3334 5.33333H8.30286C8.10543 5.33333 7.91242 5.2749 7.74816 5.16538L6.25201 4.16795C6.08774 4.05844 5.89473 4 5.69731 4H3.66675C3.11446 4 2.66675 4.44772 2.66675 5L2.66675 11.6667C2.66675 12.219 3.11446 12.6667 3.66675 12.6667H12.5526C13.0115 12.6667 13.4115 12.3544 13.5228 11.9092L14.3561 8.57587C14.5139 7.94472 14.0365 7.33333 13.386 7.33333H4.78086C4.32199 7.33333 3.92201 7.64563 3.81072 8.0908L2.75008 12.3333"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </SVG>
)

export const DirectoryIconClosed = (): React.ReactElement => (
  <SVG>
    <title>Directory</title>
    <path
      d="M12.3334 12.6667H3.66675C3.11446 12.6667 2.66675 12.219 2.66675 11.6667V5C2.66675 4.44772 3.11446 4 3.66675 4H5.69731C5.89473 4 6.08774 4.05844 6.25201 4.16795L7.74816 5.16538C7.91242 5.2749 8.10543 5.33333 8.30286 5.33333H12.3334C12.8857 5.33333 13.3334 5.78105 13.3334 6.33333V11.6667C13.3334 12.219 12.8857 12.6667 12.3334 12.6667Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </SVG>
);

const FolderItem = ({ label, isOpen }: FolderItemProps) => {
  return (
    <div className={cx(hstack({ gap: 1 }),
      css({
        color: 'clickable',
        cursor: 'pointer',
        fontSize: 3,
        lineHeight: 4,
      }))}>
      {isOpen ? <DirectoryIconOpen /> : <DirectoryIconClosed />}
      <span>{label}</span>
    </div>
  )
}

interface FileItemProps {
  label: string
}

export const FileIcon = (): React.ReactElement => (
  <SVG fill="currentColor">
    <title>File</title>
    <path
      clipRule="evenodd"
      d="M4.5 4.33325C4.5 4.05711 4.72386 3.83325 5 3.83325H8.16675V6.56659C8.16675 6.89795 8.43538 7.16658 8.76675 7.16658H11.5V12.3333C11.5 12.6094 11.2761 12.8333 11 12.8333H5C4.72386 12.8333 4.5 12.6094 4.5 12.3333V4.33325ZM12.5 6.67568C12.5001 6.67265 12.5001 6.66962 12.5001 6.66658C12.5001 6.66355 12.5001 6.66052 12.5 6.65749V6.41413C12.5 6.01631 12.342 5.63478 12.0607 5.35347L9.97978 3.27259C9.69848 2.99129 9.31694 2.83325 8.91912 2.83325H8.66675H5C4.17157 2.83325 3.5 3.50483 3.5 4.33325V12.3333C3.5 13.1617 4.17157 13.8333 5 13.8333H11C11.8284 13.8333 12.5 13.1617 12.5 12.3333V6.67568ZM9.16675 3.89888C9.20518 3.92078 9.24085 3.94787 9.27267 3.9797L11.3536 6.06058C11.3854 6.09243 11.4125 6.12813 11.4344 6.16658H9.16675V3.89888Z"
      fillRule="evenodd"
    />
  </SVG>
);

const FileItem = ({ label }: FileItemProps) => {
  return (
    <div className={cx(hstack({ gap: 1 }),
      css({
        color: 'clickable',
        cursor: 'pointer',
        fontSize: 3,
        lineHeight: 4,
        _hover: {
          color: 'accent'
        }
      }))}>
      <FileIcon />
      <span>label</span>
    </div>
  )
}

const Folder = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={() => setIsOpen(prev => !prev)}>
      {isOpen ? <FolderItem label="component" isOpen={true} /> : <FolderItem label="component" isOpen={false} />}
    </div>
  )
}

export default () => (
  <div>
    <FolderItem label="component" isOpen={true} />
    <FolderItem label="fixtures" isOpen={false} />
    <FileItem label="file-explorer.tsx" />
    <Folder />
  </div>
)