import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper/Paper';
import { Typography } from '@mui/material';

async function getData() {
  const res = await fetch('https://us-east-2.aws.data.mongodb-api.com/app/data-euxsq/endpoint/data/v1');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function EventHome() {
  return (
    <Container>
      {/* <!-- Categories Container --> */}
          {/* <!-- Text Header --> */}
          <h1 className="text-3xl text-bold">Upcoming Events</h1>
            {/* <!-- IF CATEGORIES EXISTS --> */}
              {/* <!-- FOR EACH CATEGORY IN CATEGORIES --> */}
                {/* <!-- Category Container --> */}
                  {/* <!-- Category Title --> */}
                    <h1 className="text-2xl serif py-3">EVENT.NAME</h1>

                  {/* <!-- FOR EACH EVENT IN EVENTS --> */}
                      {/* EVENT */}
                        <a href="/events/<%= event.id %>" className="sans text-xl p-2 rounded-2xl hover-bg-blue">EVENT.TITLE</a> 
            {/* ELSE */}
            <Paper sx={{ p: 5, textAlign: 'center' }}>
              <Typography variant='h4'>
                There are currently no events to display.
              </Typography>
            </Paper>
    </Container>
  );
}