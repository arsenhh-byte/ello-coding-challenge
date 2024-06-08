import React, { useState } from 'react';
import { Container, Typography, IconButton, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import ReadingList from '../components/ReadingList';
import AddIcon from '@mui/icons-material/Add';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', image: image1 },
    { id: 2, title: 'Book 2', author: 'Author 2', image: image2 },
    { id: 3, title: 'Book 3', author: 'Author 3', image: image3 },
    { id: 4, title: 'Book 4', author: 'Author 4', image: image4 },
    { id: 5, title: 'Book 5', author: 'Author 5', image: image5 },
    { id: 6, title: 'Book 6', author: 'Author 6', image: image6 },
    { id: 7, title: 'Book 7', author: 'Author 7', image: image7 },
    { id: 8, title: 'Book 8', author: 'Author 8', image: image8 },
    { id: 9, title: 'Book 9', author: 'Author 9', image: image9 },
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
      <div className="image-grid">
        {books.map((book) => (
          <Box key={book.id} className="grid-item">
            <img src={book.image} alt={book.title} />
            <Typography variant="body1">{book.title}</Typography>
            <Typography variant="body2">{book.author}</Typography>
            <IconButton onClick={() => addBook(book)} className="addButton">
              <AddIcon />
            </IconButton>
          </Box>
        ))}
      </div>
    </Container>
  );
};

export default App;
