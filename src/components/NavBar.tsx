import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import MobileDrawer from './MobileDrawer';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

const pages = [['Events', '/event'], ['About', '/about']];

export default function NavBar() {

  const homeIcon = (
    <Box>
      {/* Desktop Icon */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        href="/"
        sx={{ display: {xs: 'none', md: 'flex'},  mr: 4 }}
      >
        <Image
          width={50}
          height={46}
          src={"/images/logo-white.png"}
          alt={"Let's Read Logo"} 
        />    
      </IconButton>

      {/* Mobile Icon */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        href="/"
        sx={{ display: {xs: 'flex', md: 'none'} }}
      >
        <Image
          width={50}
          height={46}
          src={"/images/logo-white.png"}
          alt={"Let's Read Logo"} 
        />    
      </IconButton>
    </Box>
  )

  const navItems = (
    <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
      {pages.map(([item, path]) => (
        <Button 
        key={item}
        href={path} 
        variant='text' 
        size='large'
        sx={{ mr: 5 }}>
          <Typography color='#FFF'>
            {item}
          </Typography>
        </Button>
      ))}
    </Box>
  );

  const loginButton = (
    <Button sx={{ display: {xs: 'none', md: 'flex'} }} href="/user/login" variant='text' size='large'>
      <Typography color='#FFF' >
      Login
      </Typography>
  </Button>
  )

  return(
      <AppBar sx={{ bgcolor: "#1f1f1f"}} component="nav" position="static">
        <Container maxWidth="lg">
          <Toolbar>     


              {homeIcon}

              {navItems}

              <Box sx={{ flexGrow: 1 }}></Box>

              {loginButton}

              <MobileDrawer />

          </Toolbar>
        </Container>
      </AppBar>
  )
}