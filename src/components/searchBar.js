import { useMemo, useRef, useState } from "react"
import search from "../assets/images/search.png";

export default function SearchBox() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ''
  }

  return (
    <div className="flex items-center gap-4 p-4 lg:flex md:hidden hidden rounded-xl">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
        ref={inputRef}
        placeholder="Search..."
        className="bg-gray-100 p-0.5"
      />
      <button onSubmit={onSubmit} type="submit">
        <img src= {search} alt="search button for a searchbar"></img>
      </button>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </div>
  )
}
[p[kkkkkkik]]