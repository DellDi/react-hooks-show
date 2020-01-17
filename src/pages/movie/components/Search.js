import React, { useState } from 'react';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState(""); // 定义状态searchValue，设置状态
  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }
  const resetInputField = () => {
    setSearchValue('')
  }
  const callSearchFunction = e => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className="search">
      <input type="text" onChange={handleSearchInputChange} value={searchValue} />
      <input type="submit" onClick={callSearchFunction} value="Search" />
    </form>
  )
}

export default Search
