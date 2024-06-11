import React, { useState,useEffect } from "react";
import { TextField } from "@mui/material";
import "../styles/BookSearchBar.css";

const BookSearchBar = ({ onSearch,bookTitles }) => {
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

  const handleKeyDown = (event) => {
    if (event.key === "Tab" && autocompleteValue) {
      event.preventDefault();
      setSearchTerm(autocompleteValue);
      onSearch(autocompleteValue);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSearchTerm(value);
    onSearch(value.trim());
  };

  return (
    <form className="root">
      <TextField
        className="textField"
        label="Search by title"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={autocompleteValue ? autocompleteValue : "Search by title"}
      />
    </form>
  );
};

export default BookSearchBar;
