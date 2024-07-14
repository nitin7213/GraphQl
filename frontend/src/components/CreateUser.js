// src/components/CreateUser.js
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER, GET_ALL_USERS } from "../graphql/queries";

const CreateUser = () => {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: { input },
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="username"
          value={input.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={input.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          name="website"
          value={input.website}
          onChange={handleChange}
          placeholder="Website"
          required
        />
        <button type="submit">Create User</button>
      </form>
      {data && (
        <div>
          <h3>New User Created:</h3>
          <p>Name: {data.createUser.name}</p>
          <p>Username: {data.createUser.username}</p>
          <p>Email: {data.createUser.email}</p>
          <p>Phone: {data.createUser.phone}</p>
          <p>Website: {data.createUser.website}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUser;
