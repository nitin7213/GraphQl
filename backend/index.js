const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Apollo Server imports
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const startServer = async () => {
  // Create an Apollo server with debug enabled
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true, // Enable detailed error messages
    formatError: (err) => {
      // Log detailed error information
      console.error(err);
      return err;
    },
  });

  // Start the Apollo Server
  await server.start();

  // Create an Express application
  const app = express();

  // Apply middleware
  app.use(bodyParser.json());
  app.use(cors());

  // Apply Apollo GraphQL middleware to the Express application
  server.applyMiddleware({ app, path: "/graphql" });

  // Start the Express server
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () =>
    console.log(
      `Server started at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
