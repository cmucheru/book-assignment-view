import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ReadingList = ({ readingList, onRemoveFromReadingList }) => {
  return (
    <div>
      {readingList.map((book) => (
        <Card key={book.title} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">{book.title}</Typography>
            <Typography color="textSecondary">Author: {book.author}</Typography>
            <Button 
              onClick={() => onRemoveFromReadingList(book)} 
              variant="contained" 
              color="secondary"
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
