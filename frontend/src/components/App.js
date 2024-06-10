import React, { useState, useEffect } from 'react';
import { Container, Typography, IconButton, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import AddIcon from '@mui/icons-material/Add';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://ello-coding-challenge-4c2fefa3a23b.herokuapp.com', {
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
    if (!readingList.find((b) => b.title === book.title)) {
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
        We give this to certain schools for free to allow teachers to share our books with children. You are building part of the teacher-facing UI for this product, namely the book assignment view, where teachers can assign books to students.
      </Typography>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery && (
        <div className="searchResults">
          <SearchResult books={filteredBooks} addBook={addBook} />
        </div>
      )}
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <ReadingList readingList={readingList} removeBook={removeBook} />
      <Typography variant="h5" gutterBottom>
        Book Grid
      </Typography>
      <Grid container spacing={3} className="image-grid">
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="grid-item">
            <img src={book.coverPhotoURL} alt={book.title} />
            <Typography variant="body1">{book.title}</Typography>
            <Typography variant="body2">{book.author}</Typography>
            <IconButton onClick={() => addBook(book)} className="addButton">
              <AddIcon />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
