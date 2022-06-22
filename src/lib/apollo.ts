import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pvrqaj2aqb01xxgk9g3mqq/master",
  cache: new InMemoryCache(),
});
