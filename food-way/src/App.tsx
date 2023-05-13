import React from 'react';
import { Counter } from './features/counter/Counter';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import HomePage from './containers/HomePage';
/** @jsxImportSource @emotion/react */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Footer from './components/Footer';

const client = new ApolloClient({
  uri:'http://localhost:11000/graphql',
  cache:new InMemoryCache()
});

function App() {
  return (
    
    <div className='w-full h-full flex flex-col '>
      <Navbar />
      <Footer />
    </div>
 
  );
}

export default App;
