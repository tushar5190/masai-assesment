import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { NotesProvider } from './contexts/NotesContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NotesProvider>
        <Router>
          <Box minH="100vh">
            <Header />
            <Box as="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </NotesProvider>
    </ChakraProvider>
  );
}

export default App;
