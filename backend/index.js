import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/typeDefs.js"; // Assuming typeDefs is exported as default
import resolvers from "./schema/resolvers.js"; // Assuming resolvers is exported as default

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Standalone server ready at ${url}`);
