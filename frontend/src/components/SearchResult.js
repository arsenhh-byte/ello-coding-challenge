import React from 'react';
import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import images from '../utils/images'; // Import the image mappings

const SearchResult = ({ books, addBook }) => {
  return (
    <Box>
      <List>
        {books.map((book) => {
          const imageName = book.coverPhotoURL.split('/').pop().split('.')[0];
          return (
            <ListItem key={book.title} alignItems="flex-start" className="searchResultItem">
              <img src={images[imageName]} alt={book.title} className="searchResultImage" />
              <ListItemText 
                primary={book.title} 
                secondary={book.author} 
                className="searchResultText"
              />
              <IconButton onClick={() => addBook(book)}>
                <AddIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SearchResult;
