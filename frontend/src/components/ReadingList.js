import React from 'react';
import { List, ListItem, ListItemText, IconButton, Avatar, Typography, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const ReadingList = ({ readingList, removeBook }) => {
  return (
    <Box>
      {readingList.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Your reading list is currently empty.
        </Typography>
      ) : (
        <List>
          {readingList.map((book) => (
            <ListItem key={book.title} alignItems="flex-start" className="readingListItem">
              <Avatar src={book.coverPhotoURL} variant="square" className="readingListAvatar" />
              <ListItemText primary={book.title} secondary={book.author} />
              <IconButton onClick={() => removeBook(book.title)}>
                <RemoveIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ReadingList;
