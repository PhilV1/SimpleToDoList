import Button from '../utilities/Button'

function Searchbar() {
  return (
    <div className="flex justify-center">
      <input type="text" className="inline-block" />
      <Button>ADD</Button>
    </div>
  )
}

export default Searchbar
