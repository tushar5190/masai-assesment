import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link,
  HStack,
} from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      as="header" 
      bg={bg} 
      px={4} 
      py={3} 
      position="sticky" 
      top={0} 
      zIndex={10}
      borderBottomWidth="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
        <Heading size="md">Mini Notes</Heading>
        
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" fontWeight="medium">Home</Link>
          <Link as={RouterLink} to="/about" fontWeight="medium">About</Link>
          
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <span>Ìºô</span> : <span>‚òÄÔ∏è</span>}
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            variant="ghost"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
