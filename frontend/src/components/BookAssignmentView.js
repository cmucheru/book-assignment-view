import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookSearchResults from './BookSearchResults';
import BookReadingList from './BookReadingList';
import BookItem from './BookItem';

const BookAssignmentView = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  // Function to handle search action
  const handleSearch = (searchTerm) => {
    // Perform search logic here (e.g., fetch data from server)
    console.log('Search term:', searchTerm);
    // For demonstration, set search results to an empty array
    setSearchResults([]);
  };

  // Function to add a book to the reading list
  const handleAddToReadingList = (book) => {
    // Add book to reading list
    setReadingList([...readingList, book]);
  };

  // Function to remove a book from the reading list
  const handleRemoveFromReadingList = (book) => {
    // Remove book from reading list
    setReadingList(readingList.filter((item) => item.title !== book.title));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookSearchResults searchResults={searchResults} onAddToReadingList={handleAddToReadingList} />
      <BookReadingList readingList={readingList} onRemoveFromReadingList={handleRemoveFromReadingList} />
    </div>
  );
};

export default BookAssignmentView;
