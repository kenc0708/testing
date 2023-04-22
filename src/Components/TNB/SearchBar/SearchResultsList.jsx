import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult"; // Update the import statement to use default export

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.slice(0, 10).map((result) => {
        return (
          <SearchResult
            result={result} // Pass the entire result object as prop
            key={result._id}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
