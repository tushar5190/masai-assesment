import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { NotesProvider } from './contexts/NotesContext';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.900');
  const headerBg = useColorModeValue('white', 'gray.800');
  
  return (
    <NotesProvider>
      <BrowserRouter>
        <Box minH="100vh" bg={bg}>
          <Box as="header" bg={headerBg} py={4} px={6} boxShadow="sm">
            <Container maxW="container.lg">
              <HStack justifyContent="space-between">
                <Heading as="h1" size="lg">Mini Notes</Heading>
                <HStack spacing={4}>
                  <Link as={RouterLink} to="/" fontWeight="medium">Home</Link>
                  <Link as={RouterLink} to="/about" fontWeight="medium">About</Link>
                  <Button size="sm" onClick={toggleColorMode}>
                    {colorMode === 'light' ? 'Ìºô' : '‚òÄÔ∏è'}
                  </Button>
                </HStack>
              </HStack>
            </Container>
          </Box>
          
          <Box as="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </NotesProvider>
  );
}

export default App;
