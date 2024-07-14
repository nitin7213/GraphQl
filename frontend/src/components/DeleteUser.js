// src/components/DeleteUser.js
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_ALL_USERS, DELETE_USER } from "../graphql/queries";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER, {
    variables: { id },
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="User ID"
          required
        />
        <button type="submit">Delete User</button>
      </form>
      {data && data.deleteUser && <p>User deleted successfully!</p>}
      {data && !data.deleteUser && <p>User not found!</p>}
    </div>
  );
};

export default DeleteUser;
