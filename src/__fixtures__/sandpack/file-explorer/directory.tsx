import { useState } from "react"

const Directory = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      ok
    </div>
  )
}

export default Directory