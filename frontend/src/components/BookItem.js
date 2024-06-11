import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import "../styles/BookItem.css";

const highlightText = (text, highlight) => {
  if (!highlight) {
    return text;
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "#FABD33" }}>{part}</span>
    ) : (
      part
    )
  );
};


const BookItem = ({ book, onAddToReadingList, isInReadingList,searchTerm }) => {
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
            fontFamily: "'Mulish', sans-serif",
            fontSize: "12px",
            marginRight:"6px",
           

          }}
        >
          {highlightText(book.title, searchTerm)}
          </Typography>
        <Button
          onClick={() => onAddToReadingList(book)}
          variant="contained"
          color="primary"
          className="book-item-button"
          style={{
            fontFamily: "'Mulish', sans-serif",
            minWidth: "auto",
            padding: "6px 12px",
            fontSize: "6px",
            width: "100px",
            color:"#FFFFFF",
            backgroundColor: isInReadingList ? "#4AA088" : "#335c6e",
          }}
          disabled={isInReadingList}
        >
          {isInReadingList ? "Added to List" : "Add to Reading List"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
