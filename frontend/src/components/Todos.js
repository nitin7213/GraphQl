// src/components/Todos.js
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/queries";

const Todos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.getTodos?.map((todo) => (
            <tr key={todo?.id}>
              <td>{todo?.id}</td>
              <td>{todo?.title}</td>
              <td>{todo?.completed.toString()}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
