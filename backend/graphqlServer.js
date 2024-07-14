// graphqlServer.js
import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema/typeDefs.js"; // Adjust the path as needed
import resolvers from "./schema/resolvers.js"; // Adjust the path as needed

export async function startGraphQLServer() {
  // Initialize Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  return server;
}
