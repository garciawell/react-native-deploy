import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Title} from './styled';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Title>Spoti Light (WG)</Title>
      </Container>
    </>
  );
};

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

export default codePush(codePushOptions)(App);
