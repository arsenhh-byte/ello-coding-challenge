import React from 'react';
import { ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const BookItem = ({ book, actionButton }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>{book.title.charAt(0)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={book.title} secondary={book.author} />
      {actionButton}
    </>
  );
};

export default BookItem;
