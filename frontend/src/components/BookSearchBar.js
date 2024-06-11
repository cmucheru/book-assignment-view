import React, { useState, useEffect } from "react";
import { TextField, IconButton } from "@mui/material";
import "../styles/BookSearchBar.css";

const BookSearchBar = ({ onSearch, bookTitles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [autocompleteValue, setAutocompleteValue] = useState("");

  useEffect(() => {
    const match = bookTitles.find((title) =>
      title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    if (searchTerm && match) {
      setAutocompleteValue(match);
    } else {
      setAutocompleteValue("");
    }
  }, [searchTerm, bookTitles]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value.trim());
  };

  const handleClearSearchQuery = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <form className="root">
      <div className="search-bar-container">
        <TextField
          className="textField"
          label="Search book title"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          placeholder={
            autocompleteValue ? autocompleteValue : "Search book title"
          }
          style={{
            width: "300px",
          }}
        />
        {searchTerm && (
          <IconButton onClick={handleClearSearchQuery}>
            <span>X</span>
          </IconButton>
        )}
      </div>
    </form>
  );
};

export default BookSearchBar;
