import React from 'react';
  
const SearchBar = (props) => (
  <div className="searchBar">
    <input
      id="searchvalues"
      type="text"
      placeholder="Please enter a request..."
    />
    <button
      type="submit"
      className="search"
      onClick={() => {
        props.onEnter(document.getElementById('searchvalues').value);
      }}
    >
      Search
    </button>
  </div>
);

export default SearchBar;
