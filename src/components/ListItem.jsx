import { FaTrash } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { useState } from 'react';

function ListItem({ children, id, onDelete, onComplete, active }) {
  function handleClickDelete() {
    onDelete(id);
  }

  function handleClickComplete() {
    onComplete(id);
  }

  return (
    <li
      className={` bg-white listItem border rounded-md w-[300px] px-2 mb-2 flex justify-between`}
    >
      <p
        className={`${
          active ? 'text-red-600 font-medium line-through ' : ''
        } w-[210px]  break-words`}
      >
        {children}
      </p>
      <div className="button-wrapper flex">
        <button
          className={` px-2 hover:text-green-600 hover:rounded-lg w-6 `}
          onClick={handleClickComplete}
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
  );
}

export default ListItem;
