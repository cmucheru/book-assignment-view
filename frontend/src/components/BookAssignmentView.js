import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookSearchResults from "./BookSearchResults";
import BookReadingList from "./BookReadingList";
import BookItem from "./BookItem";
import { useQuery, gql } from "@apollo/client"; // Import useQuery and gql from Apollo Client

const SEARCH_BOOKS = gql`
  query SearchBooks($searchTerm: String!) {
    books(searchTerm: $searchTerm) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const BookAssignmentView = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Define searchTerm using useState hook



  // Fetch book data from the backend using useQuery hook
  const { loading, error, data } = useQuery(SEARCH_BOOKS, {
    variables: { searchTerm },
  });

  // Function to handle search action
  const handleSearch = (searchTerm) => {
    // Perform search logic here (e.g., fetch data from server)
    console.log("Search term:", searchTerm);
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
      <BookSearchResults searchResults={data ? data.books : []} loading={loading} error={error} />

      <BookReadingList
        readingList={readingList}
        onRemoveFromReadingList={handleRemoveFromReadingList}
      />
    </div>
  );
};

export default BookAssignmentView;
