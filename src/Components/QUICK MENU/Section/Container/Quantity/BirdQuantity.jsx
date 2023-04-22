import { useState } from "react";
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';


import Grid from '@mui/material/Grid';

import "./birdQuantity.css"

const BirdQuantity = ({ selectedBirdQuantity, setSelectedBirdQuantity }) => {
  const [options, setOptions] = useState([]);

  const loadOptions = (inputValue, callback) => {
    fetch("http://localhost:5000/api/quantity")
      .then(response => response.json())
      .then(data => {
        const filteredOptions = data.filter(option =>
          option.quantity.toLowerCase().includes(inputValue.toLowerCase())
        );
        const formattedOptions = filteredOptions.map(option => ({
          value: option.quantity_id,
          label: option.quantity
        }));
        callback(formattedOptions);
      })
      .catch(error => {
        console.log("Error fetching quantity data:", error);
      });
  };

  const handleChange = (selectedOption) => {
    setSelectedBirdQuantity(selectedOption);
  };

  const animatedComponents = makeAnimated();

  return (
    <div className="NumContainer" >
      
        <span className='head'>Bird Number:</span>
      

      
        <AsyncSelect
          className='async2'
          loadOptions={loadOptions}
          defaultOptions
          components={animatedComponents}
          onChange={handleChange}
          options={options}
        />
      
    </div>
  )
}

export default BirdQuantity;