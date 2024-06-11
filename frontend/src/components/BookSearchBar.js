import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../styles/BookSearchBar.css";

const BookSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
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
      />
    </form>
  );
};

export default BookSearchBar;
