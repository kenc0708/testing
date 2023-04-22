import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from "react";
import './searchBar.css'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5000/api/birds")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((bird) => {
          return (
            value &&
            bird &&
            ((bird.SCI_NAME &&
              bird.SCI_NAME.toLowerCase().includes(value.toLowerCase())) ||
              (bird.PRIMARY_COM_NAME &&
                bird.PRIMARY_COM_NAME.toLowerCase().includes(value.toLowerCase())))
          );
        });
        setResults(results);
      });
  };
  
  

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="searchBar flex">
      <input type="text"  placeholder='Search Here'
      value={input}
      onChange={(e) => handleChange(e.target.value)}/>
      <BiSearchAlt className="icon"/>
    </div>
  )
}
export default SearchBar
