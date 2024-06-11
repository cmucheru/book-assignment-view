import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import "../styles/BookItem.css";

const BookItem = ({ book, onAddToReadingList,isInReadingList }) => {
  return (
    <Card
      key={`${book.title}-${book.author}`}
      variant="outlined"
      className="book-item-card"
      style={{ border: "none" }}
    >
      <CardMedia
        component="img"
        className="book-item-media"
        image={book.coverPhotoURL}
        alt={book.coverPhotoURL}
        style={{ width: "32px", height: "32px" }}
      />
      <CardContent className="book-item-content">
        <Typography
          variant="h5"
          component="h2"
          className="book-item-title"
          style={{
            fontSize: "12px",
          }}
        >
          {book.title}
        </Typography>
        <Button
          onClick={() => onAddToReadingList(book)}
          variant="contained"
          color="primary"
          className="book-item-button"
          disabled={isInReadingList}
        style={{
          minWidth: 'auto',
          padding: '6px 12px',
          fontSize: '6px',
          width: '100px',
          marginTop: '18px',
          marginBottom: '15px',
          marginLeft: '26px',
          marginRight: '1px',
          color:'#FFFFFF',
          backgroundColor: isInReadingList ? '#4AA088':'#335c6e',
        }}
        >
          {isInReadingList?"Added to List":"Add to Reading List"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
