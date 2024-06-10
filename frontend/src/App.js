import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import BookAssignmentView from "./components/BookAssignmentView";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "Content-Type": "application/json",
      "x-apollo-operation-name": "BookSearch", // Necessary header to bypass CSRF protection
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookAssignmentView />
    </ApolloProvider>
  );
}

export default App;
