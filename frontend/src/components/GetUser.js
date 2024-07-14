// src/components/GetUser.js
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const GetUser = () => {
  const [id, setId] = useState("");
  const [fetchData, { loading, data, error }] = useLazyQuery(GET_USER);

  /* UseLazyQuery: Ideal for scenarios where you want to delay
    the execution of a query until a specific event occurs,
    such as a user action (e.g., clicking a button). 
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData({ variables: { id } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Get User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="User ID"
          required
        />
        <button type="submit">Get User</button>
      </form>
      {data && data.getUser && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {data.getUser.name}</p>
          <p>Username: {data.getUser.username}</p>
          <p>Email: {data.getUser.email}</p>
          <p>Phone: {data.getUser.phone}</p>
          <p>Website: {data.getUser.website}</p>
        </div>
      )}
    </div>
  );
};

export default GetUser;
