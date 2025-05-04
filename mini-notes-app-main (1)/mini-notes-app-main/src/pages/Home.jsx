import React from 'react';
import {
  Container,
  Grid,
  Heading,
  Text,
  Spinner,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNotes } from '../contexts/NotesContext';
import AddNoteForm from '../components/AddNoteForm';
import NoteCard from '../components/NoteCard';

const Home = () => {
  const { notes, loading } = useNotes();
  const emptyStateColor = useColorModeValue('gray.500', 'gray.400');

  if (loading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
      </Center>
    );
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6}>My Notes</Heading>
      <AddNoteForm />
      
      {notes.length === 0 ? (
        <Center py={10}>
          <Text fontSize="lg" color={emptyStateColor}>
            No notes yet. Create your first note above!
          </Text>
        </Center>
      ) : (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={4}
        >
          {notes.map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
