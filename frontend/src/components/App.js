import React, { useState } from 'react';
import { Container, TextField, List, ListItem, ListItemText, IconButton, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery, gql } from '@apollo/client';
import AddIcon from '@material-ui/icons/Add';
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

const GET_BOOKS = gql`
  query GetBooks($title: String!) {
    books(title: $title) {
      id
      title
      author
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    color: '#335C6E',
  },
  search: {
    marginBottom: theme.spacing(2),
  },
  bookList: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    boxShadow: theme.shadows[5],
    maxHeight: 300,
    overflow: 'auto',
    width: '100%',
  },
  bookItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookCover: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),
  },
  gridContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: '30%',
    paddingBottom: '20%',
    position: 'relative',
    margin: '10px',
  },
  gridImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [readingList, setReadingList] = useState([]);
  const { data } = useQuery(GET_BOOKS, {
    variables: { title: search },
    skip: !search,
  });

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const bookImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <Container className={classes.root}>
      <div className="searchContainer">
        <TextField
          label="Book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          className={classes.search}
        />
        {data && data.books.length > 0 && (
          <Paper className="searchResults">
            <List>
              {data.books.map((book, index) => (
                <ListItem key={book.id} className="searchResultItem" onClick={() => addToReadingList(book)}>
                  <img src={bookImages[index % bookImages.length]} alt="Book Cover" />
                  <ListItemText primary={book.title} secondary={book.author} />
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </div>
      <div className="gridContainer">
        {readingList.map((book, index) => (
          <div className="gridItem" key={book.id}>
            <img src={bookImages[index % bookImages.length]} alt="Book Cover" className="gridImage" />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
