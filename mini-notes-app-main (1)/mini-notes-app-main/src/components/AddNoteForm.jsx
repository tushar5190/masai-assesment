import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useNotes } from '../contexts/NotesContext';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addNote } = useNotes();
  
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    try {
      addNote(title, content);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding note:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      mb={6}
    >
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note content"
            rows={4}
          />
        </FormControl>
        
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isSubmitting}
          alignSelf="flex-end"
        >
          Add Note
        </Button>
      </VStack>
    </Box>
  );
};

export default AddNoteForm;
