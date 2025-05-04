import React, { createContext, useContext, useState, useEffect } from 'react';
import { database } from '../firebase/config';
import { ref, onValue, push, remove } from 'firebase/database';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const notesRef = ref(database, 'notes');
    
    const unsubscribe = onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const notesArray = Object.entries(data).map(([id, note]) => ({
          id,
          ...note
        }));
        setNotes(notesArray);
      } else {
        setNotes([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addNote = async (title, content) => {
    const notesRef = ref(database, 'notes');
    await push(notesRef, {
      title,
      content,
      createdAt: Date.now()
    });
  };

  const deleteNote = async (id) => {
    const noteRef = ref(database, `notes/${id}`);
    await remove(noteRef);
  };

  return (
    <NotesContext.Provider value={{ notes, loading, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
