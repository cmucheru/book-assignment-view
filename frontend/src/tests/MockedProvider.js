import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { MockLink } from "@apollo/client/testing";
import { onError } from "@apollo/client/link/error";
import { ApolloLink } from "@apollo/client";

export function MyMockedProvider(props) {
  const { mocks, children } = props;

  const mockLink = new MockLink(mocks);

  const errorLoggingLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const link = ApolloLink.from([errorLoggingLink, mockLink]);

  return (
    <MockedProvider link={link} {...props}>
      {children}
    </MockedProvider>
  );
}
