import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookItem = ({ book, onAddToReadingList }) => {
  return (
    <Card key={book.title} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">{book.title}</Typography>
        <Typography color="textSecondary">Author: {book.author}</Typography>
        <Button 
          onClick={() => onAddToReadingList(book)} 
          variant="contained" 
          color="primary"
        >
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
