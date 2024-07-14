// src/components/GetUser.js
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const GetUser = () => {
  const [id, setId] = useState("");
  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: { id },
    skip: !id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
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
