import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import "./search.css";

function Search({setQuery}) {
  return (
    <div className="search">
      <input placeholder="search a Youth..." onChange={(e)=>setQuery(e.target.value)} />
      <SearchOutlinedIcon color="primary" />
    </div>
  );
}

export default Search;
