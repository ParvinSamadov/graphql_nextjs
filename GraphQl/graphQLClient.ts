import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_BASE_URL as string;

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;
