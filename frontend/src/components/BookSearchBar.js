import React, { useState } from 'react';
import { TextField } from '@mui/material';
import '../styles/BookSearchBar.css'; // Import CSS file

const BookSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value.trim());
  };

  return (
    <form className="root"> {/* Use className instead of style */}
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
