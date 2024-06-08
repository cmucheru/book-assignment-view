// BookSearchResults.js
import React from 'react';
import BookItem from './BookItem';

const BookSearchResults = ({ searchResults }) => {
  // Check if searchResults is undefined or null
  if (!searchResults) {
    return null; // Or render a loading indicator or placeholder
  }

  return (
    <div>
      {searchResults.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
    </div>
  );
};

export default BookSearchResults;
