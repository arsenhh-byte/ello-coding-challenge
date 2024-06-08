import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import theme from './theme';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000', 
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
