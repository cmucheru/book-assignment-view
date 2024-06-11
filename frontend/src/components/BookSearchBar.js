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
    <form className="root"
    style={{
      marginTop:'40px'
    }}
    >
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
            width: "70%",
          }}
        />
        {searchTerm && (
          <IconButton onClick={handleClearSearchQuery} className="clear-button">
            <span>X</span>
          </IconButton>
        )}
    </form>
  );
};

export default BookSearchBar;
