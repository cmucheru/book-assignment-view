import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import BookSearchBar from "./BookSearchBar";
import BookSearchResults from "./BookSearchResults";
import BookReadingList from "./BookReadingList";

const FETCH_ALL_BOOKS = gql`
  query {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const BookAssignmentView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { loading, error, data } = useQuery(FETCH_ALL_BOOKS);

  useEffect(() => {
    if (data) {
      const filtered = data.books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [data, searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const [readingList, setReadingList] = useState([]);

  const handleAddToReadingList = (book) => {
    const isBookInList = readingList.some(
      (item) => item.title === book.title && item.author === book.author
    );
    if (!isBookInList) {
      setReadingList([...readingList, book]);
    }
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList(
      readingList.filter(
        (item) => item.title !== book.title || item.author !== book.author
      )
    );
  };
  const bookTitles = data ? data.books.map((book) => book.title) : [];

  return (
    <>
      <BookSearchBar onSearch={handleSearch} bookTitles={bookTitles} />
      {searchTerm !== "" && (
        <BookSearchResults
          searchResults={filteredBooks}
          loading={loading}
          error={error}
          onAddToReadingList={handleAddToReadingList}
          readingList={readingList}
          searchTerm={searchTerm}
        />
      )}
      <BookReadingList
        readingList={readingList}
        onRemoveFromReadingList={handleRemoveFromReadingList}
      />
    </>
  );
};

export default BookAssignmentView;
