import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import BookItem from './BookItem';

const SearchResult = ({ books, addBook }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id}>
          <BookItem book={book} actionButton={<Button onClick={() => addBook(book)}>Add</Button>} />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResult;
