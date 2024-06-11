// BookReadingList.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import "../styles/BookReadingList.css";

const ReadingList = ({ readingList, onRemoveFromReadingList }) => {
  return (
    <div className="card-container">
      {readingList.map((book, index) => (
        <Card
          key={`${book.title}-${book.author}-${index}`}
          variant="outlined"
          className="card"
        >
          <CardMedia
            component="img"
            height="200"
            image={book.coverPhotoURL}
            alt={book.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2" className="title">
              {book.title}
            </Typography>
            <Typography color="textSecondary" className="author">
              Author: {book.author}
            </Typography>
            <Typography color="textSecondary">
              Reading Level: {book.readingLevel}
            </Typography>
            <Button
              onClick={() => onRemoveFromReadingList(book)}
              variant="contained"
              color="secondary"
              className="button"
            >
              Remove from Reading List
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReadingList;
