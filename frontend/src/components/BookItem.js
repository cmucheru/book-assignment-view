import React from "react";
import { Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import "./BookItem.css"; // Ensure correct import path

const BookItem = ({ book, onAddToReadingList }) => {
  return (
    <Card key={`${book.title}-${book.author}`} variant="outlined" className="book-item-card"
     style={{border:'none'}}
    >
      <CardMedia
        component="img"
        className="book-item-media"
        image={book.coverPhotoURL}
        alt={book.coverPhotoURL}
        style={{ width: '32px', height: '32px' }} // Inline styles to set width and height
      />
      <CardContent className="book-item-content">
        <Typography variant="h5" component="h2" className="book-item-title"
         style={{
          color:'black',
          fontFamily:'Mulish',
          fontSize:'small',
          margin:"4px 4px"
         }}
        >
          {book.title}
        </Typography>
        <Button
          onClick={() => onAddToReadingList(book)}
          variant="contained"
          color="primary"
          className="book-item-button"
        >
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;