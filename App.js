import {ApolloProvider} from '@apollo/client/react';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import {StatusBar} from 'expo-status-bar';
import {NativeRouter} from 'react-router-native';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
