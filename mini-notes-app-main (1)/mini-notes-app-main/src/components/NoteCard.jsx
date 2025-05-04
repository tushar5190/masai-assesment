import React from 'react';
import { Box, Heading, Text, IconButton, HStack, useColorModeValue } from '@chakra-ui/react';
import { useNotes } from '../contexts/NotesContext';

const NoteCard = ({ note }) => {
  const { deleteNote } = useNotes();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      p={4} 
      borderWidth="1px" 
      borderRadius="lg" 
      borderColor={borderColor}
      bg={bg}
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: 'md' }}
    >
      <HStack justifyContent="space-between" mb={2}>
        <Heading size="md" isTruncated>{note.title}</Heading>
        <IconButton
          size="sm"
          aria-label="Delete note"
          icon={<span>Ì∑ëÔ∏è</span>}
          onClick={() => deleteNote(note.id)}
          variant="ghost"
        />
      </HStack>
      <Text noOfLines={3}>{note.content}</Text>
      <Text fontSize="xs" color="gray.500" mt={2}>
        {new Date(note.createdAt).toLocaleString()}
      </Text>
    </Box>
  );
};

export default NoteCard;
