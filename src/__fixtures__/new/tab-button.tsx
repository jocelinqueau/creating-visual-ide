import { IconWrapper } from "@/components/icon-wrapper";
import { css, cx } from "@/styled-system/css"
import { X } from 'lucide-react';
import { token } from "@/styled-system/tokens";
import { hstack, vstack } from '@/styled-system/patterns'

interface TabButtonProps {
  label: string
}

// const typography = cva({
//   base: {
//     size: 3
//   }
//   variants: {
//     size: 
//   }
// });
const TabButton = ({ label }: TabButtonProps) => {
  return (
    <button className={
      cx(hstack({ gap: 1 }), css({
        color: 'accent',
        fontSize: token('sizes.3'),
        cursor: 'pointer',
        px: 2,
        py: 3,
        '& .icon': {
          opacity: 0,
          fontSize: '0.8em'
        },
        _hover: {
          '& .icon': {
            opacity: 1,
          },
        }
      }))
    }>
      {label}
      <IconWrapper>
        <X />
      </IconWrapper>
    </button>
  )
}

export default <TabButton label="Tab Button" />