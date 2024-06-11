import React, { useState, useEffect } from 'react';
import { Container, Typography, IconButton, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import AddIcon from '@mui/icons-material/Add';
import './App.css';

const App = () => {
  // State to store the search query entered by the user
  const [searchQuery, setSearchQuery] = useState('');
  // State to store the list of books fetched from the server
  const [books, setBooks] = useState([]);
  // State to store the user's reading list
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    // Fetch books from the server when the component mounts
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
        // Prepend the server URL to the coverPhotoURL
        const booksWithFullURL = result.data.books.map(book => ({
          ...book,
          coverPhotoURL: `http://localhost:4000/assets/${book.coverPhotoURL}`
        }));
        setBooks(booksWithFullURL);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Function to add a book to the reading list
  const addBook = (book) => {
    if (!readingList.find((b) => b.title === book.title)) {
      // Only add the book if it's not already in the reading list
      setReadingList([...readingList, book]);
    }
  };

  // Function to remove a book from the reading list
  const removeBook = (title) => {
    setReadingList(readingList.filter((book) => book.title !== title));
  };

  // Filter the list of books based on the search query
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
        <div className="searchResults">
          <SearchResult books={filteredBooks} addBook={addBook} />
        </div>
      )}
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <ReadingList readingList={readingList} removeBook={removeBook} />
      <Typography variant="h5" gutterBottom>
        All Books
      </Typography>
      <Grid container spacing={3} className="image-grid">
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="grid-item">
            <img src={book.coverPhotoURL} alt={book.title} />
            <Typography variant="body1">{book.title}</Typography>
            <Typography variant="body2">{book.author}</Typography>
            <Typography variant="body3">{book.readingList}</Typography>

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
