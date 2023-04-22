import "./birdDetail.css"
//search bar import
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated';

import { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';


const BirdDetail = ({ selectedBird, setSelectedBird }) => {
    //fetch 
    const [options, setOptions] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/api/birds")
        .then((response) => response.json())
        .then((data) => {
          const birdOptions = data.map((bird) => {
            return {
              value: bird.SCI_NAME,
              label: (bird.PRIMARY_COM_NAME + " ("+ bird.SCI_NAME + ")"),
            };
          });
          setOptions(birdOptions);
        })
        .catch((error) => {
          console.log("Error fetching bird data:", error);
        });
    }, []);
  
    //record change
    const handleChange = (selectedOption) => {
      setSelectedBird(selectedOption);
    }
  
    //load async list
    const loadOptions = (searchValue, callback) => {
      setTimeout(() => {
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(searchValue.toLowerCase())
        ).slice(0, 10); // Limit the results to a maximum of 10
        console.log('loadOptions', searchValue, filteredOptions);
        callback(filteredOptions);
      });
    };
  
    //animation
    const animatedComponents = makeAnimated();
  
    return (
      <div className="BirdContainer" >
        <span className='head'>Bird Name:</span>
        <AsyncSelect
          className='async'
          isMulti
          loadOptions={loadOptions}
          defaultOptions
          components={animatedComponents}
          onChange={handleChange}
        />
      </div>
    )
  }
  
  export default BirdDetail;