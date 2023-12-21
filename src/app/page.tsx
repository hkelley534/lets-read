import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const styles = {
  BoxB: {
      backgroundImage: `url(${"/images/background2.png"})`,
      backgroundSize: 'cover'
  }
};

export default function HomePage() {
  return (
    <main className='h-screen'>
      <Box style={styles.BoxB}>
        <Container sx={{ textAlign: 'center', height: '70vh' }}>
          <Typography color='#FFF' sx={{ pt: 12 }} variant='h1'>
            Let&#8217;s Read Book Club
          </Typography>
            <Typography color='#FFF' sx={{ my: 5 }} variant='h6'>
            At Let&#8217;s Read, we believe in the transformative power of words. 
            Immerse yourself in a community of passionate readers who share the joy of exploring captivating stories, diverse perspectives, and the boundless world of literature.          
            </Typography>
            <Button 
            href="/event" 
            variant="contained"
            color="primary"
            sx={{ my: 4}}>
              <Typography sx={{ p: 1 }} variant='h4'>
                EVENTS
              </Typography>
            </Button>
        </Container>
      </Box>
      <Container sx={{ textAlign: 'center' }} >
        <Typography  sx={{ my: 5 }} variant='h2'>
          Why Let&#8217;s Read?
        </Typography>

        <Paper elevation={10}>
          <List>
            <ListItem>
              <Typography sx={{ mr: 2 }} fontWeight='bold'> 
                Curated Selections 
              </Typography>
              Our team carefully curates a diverse range of books across genres, ensuring there&#8217;s something for everyone. 
              From timeless classics to contemporary gems, we&#8217;re committed to broadening your literary horizons.
            </ListItem>
            <ListItem>
              <Typography sx={{ mr: 2 }} fontWeight='bold'> 
                Engaging Discussions
              </Typography>
              Connect with fellow book enthusiasts in lively discussions that bring stories to life. 
              Share your insights, engage in thoughtful debates, and build meaningful connections with people who share your love for reading.
            </ListItem>
            <ListItem>
              <Typography sx={{ mr: 2 }} fontWeight='bold'> 
                Inclusive Community
              </Typography>
              Let&#8217;s Read is a welcoming space for readers of all backgrounds. 
              Our commitment to diversity ensures that every voice is heard and every story celebrated. Join us in fostering a community where everyone feels seen and valued.              </ListItem>
          </List>
        </Paper>
      </Container>
    </main>
  );
}
