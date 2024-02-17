import { useState } from 'react'
import ListItem from '../utilities/ListItem'

function Searchbar() {
  const [term, setTerm] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = { id: todos.length + 1, text: term }
    setTodos([...todos, newTodo])
    setTerm('')
  }

  function handleChange(e) {
    setTerm(e.target.value)
  }

  const handleDelete = (itemId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId))
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <form onSubmit={handleSubmit} className="w-[300px] ">
        <div className="flex justify-between">
          <input
            type="text"
            id="createToDo"
            onChange={handleChange}
            value={term}
            className="rounded-md px-2 w-full mr-2"
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-2 rounded-md hover:bg-green-600 easw-in-out duration-300"
          >
            Create
          </button>
        </div>
      </form>
      <ul className="taskList ">
        {todos.map((todo) => (
          <ListItem key={todo.id} id={todo.id} onDelete={handleDelete}>
            {todo.text}
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

export default Searchbar
