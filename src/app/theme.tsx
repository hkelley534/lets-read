'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto_Slab } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import BackgroundImage from '/images/background.jpg'

const roboto_slab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})
const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const theme = createTheme({
  palette: {
    // mode: 'dark'},
    primary: {
      main: '#97C4C1'
    },
    secondary: {
      main: '#FCDADB',
      light: '#CDEA9E'
    },
  },
  typography: {
    fontFamily: roboto_mono.style.fontFamily,
    h1: {
      fontFamily: roboto_slab.style.fontFamily,
    }
  }
});

export default theme