import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1">About Mini Notes</Heading>
        
        <Text fontSize="lg">
          Mini Notes is a simple note-taking application built with React, Firebase, and Chakra UI.
          It allows you to create, view, and delete notes with a clean, responsive interface.
        </Text>
        
        <Box>
          <Heading as="h2" size="md" mb={3}>Features</Heading>
          <List spacing={2}>
            <ListItem>
              <span role="img" aria-label="checkmark" style={{ marginRight: '8px' }}>‚úÖ</span>
              Create notes with title and content
            </ListItem>
            <ListItem>
              <span role="img" aria-label="checkmark" style={{ marginRight: '8px' }}>‚úÖ</span>
              View all your notes in one place
            </ListItem>
            <ListItem>
              <span role="img" aria-label="checkmark" style={{ marginRight: '8px' }}>‚úÖ</span>
              Delete notes you no longer need
            </ListItem>
            <ListItem>
              <span role="img" aria-label="checkmark" style={{ marginRight: '8px' }}>‚úÖ</span>
              Toggle between light and dark themes
            </ListItem>
            <ListItem>
              <span role="img" aria-label="checkmark" style={{ marginRight: '8px' }}>‚úÖ</span>
              Responsive design for all devices
            </ListItem>
          </List>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={3}>Technologies Used</Heading>
          <List spacing={2}>
            <ListItem>
              <span role="img" aria-label="tech" style={{ marginRight: '8px' }}>‚öõÔ∏è</span>
              React with Vite
            </ListItem>
            <ListItem>
              <span role="img" aria-label="tech" style={{ marginRight: '8px' }}>Ì¥•</span>
              Firebase Realtime Database
            </ListItem>
            <ListItem>
              <span role="img" aria-label="tech" style={{ marginRight: '8px' }}>Ì≤Ö</span>
              Chakra UI for styling
            </ListItem>
            <ListItem>
              <span role="img" aria-label="tech" style={{ marginRight: '8px' }}>Ì¥Ñ</span>
              React Router for navigation
            </ListItem>
            <ListItem>
              <span role="img" aria-label="tech" style={{ marginRight: '8px' }}>Ìºì</span>
              Theme toggling with preference persistence
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
