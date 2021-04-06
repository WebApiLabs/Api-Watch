/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const SearchBar = (props) => (
  <div className = 'searchBar'>
  <input
    id="searchvalues"
    type="search"
    placeholder="Please enter a request..."
    value={props.inputName}

  ></input>
  <button className="search" onClick = {() => {

    props.onEnter(document.getElementById('searchvalues').value)
  }}>Search<i className="fab fa-searchengin"></i></button>
 
  </div>

);

export default SearchBar;
