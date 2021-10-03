/*
*   ***************************NOTE******************************
*
* implementation of future features using Redux, not yet integrated due to complexity of queries with apollo
* */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Apollo setup for api queries
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
//Redux setup
/*import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./Redux/Reducers";
import thunkMiddleware from 'redux-thunk'
// Redux store setup with all reducers
const store = createStore(allReducers, applyMiddleware(thunkMiddleware));*/

// Apollo setup
const client = new ApolloClient({
    uri: 'https://star-wars-apollo-graphql-api.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
              <App/>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
