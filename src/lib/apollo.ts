import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPHI_CMS_URL,
  cache: new InMemoryCache(),
});
