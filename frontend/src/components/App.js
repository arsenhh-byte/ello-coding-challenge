import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, IconButton, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import AddIcon from '@mui/icons-material/Add';
import images from '../utils/images'; // Import the image mappings
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:4000/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query {
                books {
                  title
                  author
                  coverPhotoURL
                  readingLevel
                }
              }
            `,
          }),
        });
        const result = await response.json();
        setBooks(result.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const addBook = (book) => {
    if (!readingList.some((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeBook = (title) => {
    setReadingList(readingList.filter((book) => book.title !== title));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Teacher's Book Assignment Tool
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your book assignment tool. This tool is meant to help you figure out which book would be the best assignment for your students.
        ENJOY :)
      </Typography>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery && (
        <Box className="searchResults">
          <SearchResult books={filteredBooks} addBook={addBook} />
        </Box>
      )}
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <ReadingList readingList={readingList} removeBook={removeBook} />
      <Typography variant="h5" gutterBottom>
        All Books
      </Typography>
      <Grid container spacing={1} className="image-grid">
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="grid-item">
            <div className="image-wrapper">
              <img src={images[book.coverPhotoURL.split('/').pop().split('.')[0]]} alt={book.title} className="image-resize" />
            </div>
            <div className="text-wrapper">
              <Typography variant="body1">{book.title}</Typography>
              <Typography variant="body3">{book.author}</Typography>
              <Typography variant="body2">{book.readingLevel}</Typography>
            </div>
            <div className="button-wrapper">
              <IconButton onClick={() => addBook(book)} className="addButton">
                <AddIcon />
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
