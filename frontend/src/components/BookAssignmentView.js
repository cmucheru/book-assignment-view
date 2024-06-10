import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import BookSearchBar from './BookSearchBar';
import BookSearchResults from './BookSearchResults';
import BookReadingList from './BookReadingList';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { loading, error, data } = useQuery(FETCH_ALL_BOOKS);

  useEffect(() => {
    if (data) {
      const filtered = data.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [data, searchTerm]);

  console.log('Search term:', searchTerm); // Log the search term in BookAssignmentView

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const [readingList, setReadingList] = useState([]);

  const handleAddToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList(readingList.filter((item) => item.title !== book.title));
  };

  return (
    <>
      <BookSearchBar onSearch={handleSearch} />
      {searchTerm === '' ? ( // Render reading list directly if search term is empty
        <BookReadingList
          readingList={readingList}
          onRemoveFromReadingList={handleRemoveFromReadingList}
        />
      ) : (
        <BookSearchResults
          searchResults={filteredBooks}
          loading={loading}
          error={error}
          onAddToReadingList={handleAddToReadingList}
        />
      )}
    </>
  );
};

export default BookAssignmentView;
