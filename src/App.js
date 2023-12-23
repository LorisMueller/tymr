import React from 'react';
import './App.css';
import MainPage from './page/mainpage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet"></link>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
