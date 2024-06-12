import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import image10 from "../assets/image10.webp";

const images = {
  'image1': image1,
  'image2': image2,
  'image3': image3,
  'image4': image4,
  'image5': image5,
  'image6': image6,
  'image7': image7,
  'image8': image8,
  'image9': image9,
  'image10': image10,
};

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
