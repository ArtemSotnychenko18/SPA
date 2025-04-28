import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

function App() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        overflowX: 'hidden' 
      }}
    >
      <CssBaseline /> 
      <Header />
      <Container sx={{ flex: 1, mt: 2, mb: 2 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;