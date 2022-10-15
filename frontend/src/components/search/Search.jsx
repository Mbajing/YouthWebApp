import  SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined'
import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className='search'>
        <input placeholder='search a Youth...'/>
        <SearchOutlinedIcon color='primary'/>

    </div>
  )
}

export default Search