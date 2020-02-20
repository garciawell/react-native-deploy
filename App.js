import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Title} from './styled';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Title>Spoti Light</Title>
      </Container>
    </>
  );
};

export default App;
