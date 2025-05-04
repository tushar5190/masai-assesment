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
          Mini Notes is a simple note-taking application built with React and Chakra UI.
          It allows you to create, view, and delete notes with a clean, responsive interface.
        </Text>
        
        <Box>
          <Heading as="h2" size="md" mb={3}>Features</Heading>
          <List spacing={2}>
            <ListItem>
              <Text>‚úÖ Create notes with title and content</Text>
            </ListItem>
            <ListItem>
              <Text>‚úÖ View all your notes in one place</Text>
            </ListItem>
            <ListItem>
              <Text>‚úÖ Delete notes you no longer need</Text>
            </ListItem>
            <ListItem>
              <Text>‚úÖ Toggle between light and dark themes</Text>
            </ListItem>
            <ListItem>
              <Text>‚úÖ Responsive design for all devices</Text>
            </ListItem>
            <ListItem>
              <Text>‚úÖ Data persists in local storage</Text>
            </ListItem>
          </List>
        </Box>
        
        <Box>
          <Heading as="h2" size="md" mb={3}>Technologies Used</Heading>
          <List spacing={2}>
            <ListItem>
              <Text>‚öõÔ∏è React with Vite</Text>
            </ListItem>
            <ListItem>
              <Text>Ì≤Ö Chakra UI for styling</Text>
            </ListItem>
            <ListItem>
              <Text>Ì¥Ñ React Router for navigation</Text>
            </ListItem>
            <ListItem>
              <Text>Ìºì Theme toggling with preference persistence</Text>
            </ListItem>
            <ListItem>
              <Text>Ì≤æ Local Storage for data persistence</Text>
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
