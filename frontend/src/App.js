// src/App.js
import React from "react";
import Users from "./components/Users";
import Todos from "./components/Todos";
import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import GetUser from "./components/GetUser";

const App = () => (
  <div>
    <h1>GraphQL Apollo Client Demo</h1>

    <GetUser />
    <Users />
    <CreateUser />
    <DeleteUser />
    <Todos />
  </div>
);

export default App;
