import React from 'react';
import {StatusBar, TextInput} from 'react-native';
import {Container, Title} from './styled';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Title>Spoti Light v1.2</Title>
        <TextInput
          style={{color: '#fff', border: '1px solid #fff', padding: '10px'}}
        />
      </Container>
    </>
  );
};

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

export default codePush(codePushOptions)(App);
