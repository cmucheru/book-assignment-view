import React from 'react';
import BookItem from './BookItem';

const BookSearchResults = ({ searchResults }) => {
  // Render the component only if there are search results
  if (!searchResults || searchResults.length === 0) {
    return null; // Or render a message indicating no search results
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
