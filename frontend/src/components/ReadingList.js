import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import images from '../utils/images'; // Import the image mappings

const ReadingList = ({ readingList, removeBook }) => {
  return (
    <Box>
      {readingList.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Your reading list is currently empty.
        </Typography>
      ) : (
        <List>
          {readingList.map((book) => {
            const imageName = book.coverPhotoURL.split('/').pop().split('.')[0];
            return (
              <ListItem key={book.title} alignItems="flex-start" className="readingListItem">
                <img src={images[imageName]} alt={book.title} className="readingListImage" />
                <ListItemText 
                  primary={book.title} 
                  secondary={book.author} 
                  className="readingListText"
                />
                <IconButton onClick={() => removeBook(book.title)}>
                  <RemoveIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default ReadingList;
