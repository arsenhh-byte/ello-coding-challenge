import React from 'react';
import { List, ListItem, ListItemText, IconButton, Avatar } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const ReadingList = ({ readingList, removeBook }) => {
  return (
    <List>
      {readingList.map((book) => (
        <ListItem key={book.id} alignItems="flex-start" className="readingListItem">
          <Avatar src={book.image} variant="square" className="readingListAvatar" />
          <ListItemText primary={book.title} secondary={book.author} />
          <IconButton onClick={() => removeBook(book.id)}>
            <RemoveIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
