import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ]);
  const [readingList, setReadingList] = useState([]);

  const addBook = (book) => {
    if (!readingList.find((b) => b.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeBook = (id) => {
    setReadingList(readingList.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Assignment
      </Typography>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResult books={filteredBooks} addBook={addBook} />
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <ReadingList readingList={readingList} removeBook={removeBook} />
    </Container>
  );
};

export default App;
