import { GraphQLClient } from "graphql-request";

const url = process.env.ENDPOINT;

const graphql = new GraphQLClient(url, {
  headers: {
    Authorization: process.env.GRAPH_CMS_TOKEN,
  },
});



export { graphql};
