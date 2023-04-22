import './tools.css'
import { useState } from "react";
import SearchBar from '../../TNB/SearchBar/SearchBar';
import SearchResultsList from '../../TNB/SearchBar/SearchResultsList';
import video1 from '../../../Assets/video.mp4'


const Tools = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="main">
      <div className="content">
        <p className='Heading'>Search For the Bird</p>
        <div className="bar">
          <SearchBar setResults={setResults} />

          {results && results.length > 0 &&           
          <SearchResultsList results={results} />}
        </div>
      </div>    

      

      <div className="videoCard">
        <div className="overlay1"></div>
        <video src={video1} autoPlay loop muted></video>
      </div>

          
      
    </div>
  )
}

export default Tools