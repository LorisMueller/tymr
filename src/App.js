import React from 'react';
import './App.css';
import MainPage from './page/mainpage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
