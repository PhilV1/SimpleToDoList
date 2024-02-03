function Searchbar() {
  return (
    <div className="flex justify-center">
      <form action="">
        <input type="text" id="createToDo" />
        <button type="submit" className="bg-gray-600">
          Create ToDo
        </button>
      </form>
    </div>
  )
}

export default Searchbar
