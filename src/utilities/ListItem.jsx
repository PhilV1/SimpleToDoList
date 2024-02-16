import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'

function ListItem({ children, id, onDelete }) {
  function handleClickDelete() {
    onDelete(id)
  }

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li
      className={` bg-white listItem border rounded-md w-[300px] px-2 mb-2 flex justify-between`}
    >
      <p
        className={`${
          isActive ? 'text-red-600 font-medium line-through ' : ''
        } w-[210px]  break-words`}
      >
        {children}
      </p>
      <div className="button-wrapper flex">
        <button
          className={` px-2 hover:text-green-600 hover:rounded-lg w-6 `}
          onClick={handleClick}
        >
          <ImCheckmark />
        </button>
        <button
          onClick={handleClickDelete}
          className={` px-2 hover:text-red-600 hover:rounded-lg  w-6`}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  )
}

export default ListItem
