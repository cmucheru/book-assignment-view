import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import searchBarStyles from '../styles/BookSearchBar.styles'; // Import styles

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value.trim()); // Trim whitespace from search term
  };

  return (
    <form style={searchBarStyles.root}>
      <TextField 
        style={searchBarStyles.textField}
        label="Search by title" 
        variant="outlined" 
        value={searchTerm} 
        onChange={handleChange} 
      />
      {/* Optional: Add a search button */}
      {/* <Button 
        style={searchBarStyles.button}
        type="submit" 
        variant="contained" 
        color="primary"
      >
        Search
      </Button> */}
    </form>
  );
};

export default SearchBar;
