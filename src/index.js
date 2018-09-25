import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost'
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
})

//Vanilla JS query:
client.query({
	query: gql`
		{
			rates(currency: "USD") {
				currency
			}
		}
	`
})
.then(result => console.log(result))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
