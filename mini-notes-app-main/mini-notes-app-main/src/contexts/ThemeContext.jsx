import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(() => {
    const savedMode = localStorage.getItem('chakra-ui-color-mode');
    return savedMode || 'light';
  });

  const toggleColorMode = () => {
    setColorMode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('chakra-ui-color-mode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = colorMode;
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
