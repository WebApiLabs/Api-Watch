import React from 'react';

const SearchBar = (props) => (
  <div className="searchBar">
    <input
      id="searchvalues"
      type="search"
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
      <i className="fab fa-searchengin" />
    </button>
  </div>
);

export default SearchBar;
