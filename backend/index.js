// index.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { startGraphQLServer } from "./graphqlServer.js"; // Adjust the path as needed
import { expressMiddleware } from "@apollo/server/express4";

const graphqlServer = await startGraphQLServer();
await graphqlServer.start();

// Create an Express application
const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/graphql", expressMiddleware(graphqlServer));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
