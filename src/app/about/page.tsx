import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper/Paper';

export default function About() {
  return (
      <Container sx={{ textAlign: 'center', mt: 5, p: 3 }}>

        <Paper>
          <Typography variant='h6' sx={{ p:3, m:5 }}>
          Lets read book club is a new book club open to everybody
            
          We promote members to suggest a variety of fiction and non-fiction content 
           
          Members can create their own meetings or check out existing events on our events page below!   
          </Typography>
        </Paper>


      </Container>
  );
}
