import React from 'react';
import BookItem from './BookItem';
import './BookSearchResults.css'; // Import the CSS file

const BookSearchResults = ({ searchResults, loading, error, onAddToReadingList }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  return (
    <div className="book-search-results-container">
      {searchResults.slice(0, 4).map((book) => (
        <BookItem 
          key={`${book.title}-${book.author}`} 
          book={book} 
          onAddToReadingList={onAddToReadingList}
          className="card" // Use classNames for styling
        />
      ))}
      <div className="scroll-down-hint">Scroll down for more</div>
    </div>
  );
};

export default BookSearchResults;
