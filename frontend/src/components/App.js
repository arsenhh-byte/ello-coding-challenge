import React, { useState, useEffect } from 'react';
import { Container, Typography, IconButton, Grid, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import AddIcon from '@mui/icons-material/Add';
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import image10 from "../assets/image10.webp";
import './App.css';

const images = {
  'image1': image1,
  'image2': image2,
  'image3': image3,
  'image4': image4,
  'image5': image5,
  'image6': image6,
  'image7': image7,
  'image8': image8,
  'image9': image9,
  'image10': image10,
};

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
          coverPhotoURL: `${book.coverPhotoURL}`
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
      <Grid container spacing={1} className="image-grid">
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="grid-item">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={images[book.coverPhotoURL.split('/')[1].split('.')[0]]} alt={book.title} className="image-resize" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px' }}>
              <Typography variant="body1">{book.title}</Typography>
              <Typography variant="body3">{book.author}</Typography>
              <Typography variant="body2">{book.readingLevel}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
