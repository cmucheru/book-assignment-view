import React from "react";
import { Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import "../styles/BookItem.css";

const BookItem = ({ book, onAddToReadingList }) => {
  return (
    <Card key={`${book.title}-${book.author}`} variant="outlined" className="book-card">
      <CardMedia
        component="img"
        className="media"
        image={book.coverPhotoURL}
        alt={book.coverPhotoURL}
      />
      <CardContent className="content">
        <Typography variant="h5" component="h2" className="title">
          {book.title}
        </Typography>
      
       
        <Button
          onClick={() => onAddToReadingList(book)}
          variant="contained"
          color="primary"
          className="button"
        >
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
