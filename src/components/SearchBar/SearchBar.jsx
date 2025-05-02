import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchValue)
  }
  
  const handleChange = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value === '') {
      onSearch('')
    }
  }
  
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search posts here..."
        value={searchValue}
        onChange={handleChange}
        className="search-input"
        aria-label="Search posts"
      />
    </form>
  )
}

export default SearchBar