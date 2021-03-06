import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import * as serviceWorker from './serviceWorker';


import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';  
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:8000/graphql'
  })
const client = new ApolloClient({
  cache, 
  link
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
