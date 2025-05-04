import React, { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      } else {
        
        const sampleNotes = [
          {
            id: '1',
            title: 'Welcome to Mini Notes',
            content: 'This is a sample note showing how the app works with localStorage.',
            createdAt: Date.now()
          }
        ];
        localStorage.setItem('notes', JSON.stringify(sampleNotes));
        setNotes(sampleNotes);
      }
    } catch (error) {
      console.error('Error loading notes from localStorage:', error);
    }
    setLoading(false);
  }, []);

 
  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Error saving notes to localStorage:', error);
    }
  }, [notes]);

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: Date.now()
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, loading, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
