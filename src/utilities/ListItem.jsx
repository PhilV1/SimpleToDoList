import { useState } from 'react'

function ListItem({ children, id, onDelete }) {
  function handleClickDelete() {
    onDelete(id)
  }

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li className="bg-white listItem border rounded-md w-[300px] px-2 mb-2 flex justify-between ">
      {children}{' '}
      <div className="">
        <button
          className={`${
            isActive ? 'bg-black' : 'bg-white'
          } px-2 hover:bg-green-400 hover:rounded-lg`}
          onClick={handleClick}
        >
          J
        </button>
        <button onClick={handleClickDelete}>X</button>
      </div>
    </li>
  )
}

export default ListItem
