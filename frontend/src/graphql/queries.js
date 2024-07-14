import { gql } from "@apollo/client";

// Queries
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

// Mutations
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
