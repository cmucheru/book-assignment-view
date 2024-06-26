import React from "react";
import { CustomScroll } from "react-custom-scroll";
import { CircularProgress } from "@mui/material";
import BookItem from "./BookItem";

const BookSearchResults = ({
  searchResults,
  loading,
  error,
  onAddToReadingList,
  readingList,
  searchTerm,
}) => {
  if (loading)
    return (
      <center>
        <CircularProgress />
      </center>
    );
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
        backgroundColor: "white",
        position: "relative",
        zIndex: 2,
      }}
    >
      <CustomScroll>
        {searchResults.map((book) => {
          const isInReadingList = readingList.some(
            (item) => item.title === book.title && item.author === book.author
          );
          return (
            <BookItem
              key={`${book.title}-${book.author}`}
              book={book}
              onAddToReadingList={onAddToReadingList}
              isInReadingList={isInReadingList}
              searchTerm={searchTerm}
            />
          );
        })}
      </CustomScroll>
    </div>
  );
};

export default BookSearchResults;
