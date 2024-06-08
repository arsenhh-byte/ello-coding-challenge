import React from 'react';
import { List, ListItem, ListItemText, IconButton, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const SearchResult = ({ books, addBook }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id} alignItems="flex-start" className="searchResultItem">
          <Avatar src={book.image} variant="square" className="searchResultAvatar" />
          <ListItemText primary={book.title} secondary={book.author} />
          <IconButton onClick={() => addBook(book)}>
            <AddIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResult;
