import "./searchDetail.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import {BsArrowLeftShort} from 'react-icons/bs'
import RedlistStatus from "./RedlistStatus";

  const SearchDetails = () => {
  const location = useLocation(); // Get the location object from react-router-dom
  const data = location.state.data; // Access the data passed from the previous page
  

  const [results, setResults] = useState([]);
  // Render the data in SearchDetails page
  return (
    
    <div className="Wiki">
      <div className="TOPNB">
        <div className="Left">
          <a href="/Tools">
          <p className="SearchTitle"> <BsArrowLeftShort className="arrow"/> Search Research : </p> 
          </a>
          <p className="SubSearchTitle">{data.birdDetail.ORDER1} \ </p>
          <p className="SubSearchTitle"> {data.birdDetail.FAMILY}</p>
        </div>
        <div className="Right">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </div>

      <div className="WikiContainer">

        <div className="ContainerLeft">

          <div className="BirdResource">
            <img 
              src={data.image_url} 
              alt="Bird Image" 
              className="image" 
            />
          </div>
          <div className="InfoContainer">
            <p>
                <span className="Title">DESCRIPTION :</span>
                <br></br>
                <br></br>
                <span className="SubTitle">{data.birdDetail.DESCRIPTION}</span>
            </p>
          </div>    
        </div>

        <div className="ContainerRight">
            <div className="InfoContainer1">
              <p>
                <span className="Title">PUBLIC NAME :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.PRIMARY_COM_NAME}</span>
              </p>
              <p>
                <span className="Title">SCIENTIFIC NAME :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.SCI_NAME}</span>
              </p>
              <br></br>
              <p>
                <span className="Title">FAMILY :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.FAMILY}</span>
              </p>
              <p>
                <span className="Title">SPECIES GROUP :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.SPECIES_GROUP}</span>
              </p>
            </div>
            <div className="InfoContainer2">
              
              <p>
                <span className="Title">ORDER :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.ORDER1}</span>
              </p>
              <p>
                <span className="Title">CATEGORY :</span>
                <br></br>
                <span className="SubTitle">{data.birdDetail.ORDER1}</span>
              </p>
              <br></br>
              <br></br>
              <p>
                  <span className="Title">AUTHORITY :</span>
                  <br></br>
                  <span className="SubTitle">{data.birdDetail.AUTHORITY}</span>
              </p>
              
              <p>
                  <span className="Title">NAME_AND_AUTH :</span>
                  <br></br>
                  <span className="SubTitle">{data.birdDetail.NAME_AND_AUTH}</span>
              </p>
              
              <p>
                  <span className="Title">RANGE :</span>
                  <br></br>
                  <span className="SubTitle">{data.birdDetail.RANGE}</span>
              </p>
            </div>
            <div className="InfoContainer3">
              <RedlistStatus />
            </div>
            
          
      </div>

    </div>
    </div>
  );
};

export default SearchDetails;