import { useState } from 'react'
import { SearchIcon } from '../icons/index.js'

export default function SearchBar({ onSearch, placeholder = 'Buscar productos...' }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(value)
  }

  return (
    <form className="ui-searchbar" onSubmit={handleSubmit}>
      <SearchIcon size={18} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar"
      />
    </form>
  )
}
