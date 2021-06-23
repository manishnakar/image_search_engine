import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search_bar">
      <input
        placeholder="type something, e.g. apples"
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;