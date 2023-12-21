import * as React from 'react';
import type { Metadata } from 'next'
import './globals.css'
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '@/components/NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: `Let's Read Book Club`,
  description: 'Next.js App Router + Material UI v5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <Box sx={{ bgcolor: "background.paper"}}>
            <NavBar/>
            {children}
            {/* Footer */}
          </Box>
        </body>
      </html>
    </ThemeProvider> 
  )
}
