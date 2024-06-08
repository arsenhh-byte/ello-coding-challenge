import React from 'react';
import { List, ListItem, Button } from '@mui/material';
import BookItem from './BookItem';

const ReadingList = ({ readingList, removeBook }) => {
  return (
    <List>
      {readingList.map((book) => (
        <ListItem key={book.id}>
          <BookItem book={book} actionButton={<Button onClick={() => removeBook(book.id)}>Remove</Button>} />
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
