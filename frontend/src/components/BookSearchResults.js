import React from "react";
import { CustomScroll } from "react-custom-scroll";
import BookItem from "./BookItem";

const BookSearchResults = ({
  searchResults,
  loading,
  error,
  onAddToReadingList,
  readingList,
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        height: "150px",
        width: "100%",
        margin: "0 auto",
        overflowY: "auto",
      }}
    >
      <CustomScroll>
        {searchResults.map((book) => (
          <BookItem
            key={`${book.title}-${book.author}`}
            book={book}
            onAddToReadingList={onAddToReadingList}
            isInReadingList={readingList.some((item) => item.title === book.title)} 
            
          />
        ))}
      </CustomScroll>
    </div>
  );
};

export default BookSearchResults;
