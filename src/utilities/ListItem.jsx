function ListItem({ children }) {
  return (
    <li className="bg-white listItem border rounded-md w-[300px] px-2 mb-2">
      {children} <button>J</button>
      <button>X</button>
    </li>
  )
}

export default ListItem
