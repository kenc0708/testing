import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; // Import useNavigate, Link, and useLocation from react-router-dom
import "./searchResult.css";

export const SearchResult = ({ result }) => {
  const { PRIMARY_COM_NAME, SCI_NAME } = result;
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const location = useLocation(); // Get the location object from react-router-dom
  
  const handleClick = () => {
    // Handle click event and send data to backend
    // You can use fetch or any other HTTP library to send a POST request to your backend endpoint with the data to be passed
    // For example:
    fetch("http://localhost:5000/api/birds/dictionary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ SCI_NAME: SCI_NAME }), // Pass the SCI_NAME value to the backend
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from backend
        console.log(data);
        
        // Navigate to SearchResult page with the data as query params
        navigate("/searchdetails", { state: { data } }); // Update the URL and pass the data as state to the SearchResult page
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  

  return (
    <div className="search-result" onClick={handleClick}>
      <div className="common-name">{PRIMARY_COM_NAME}</div>
      <div className="scientific-name">
        <em className="italic grey smaller">{SCI_NAME}</em>
      </div>
    </div>
  );
};

export default SearchResult;

