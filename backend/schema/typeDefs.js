const typeDefs = `#graphql
  type Query {
    getTodos: [Todo!]!
    getAllUsers: [User!]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    deleteUser(id: ID!): Boolean
  }

  input CreateUserInput {
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
  }

  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    user: User
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }

  type Geo {
    lat: String!
    lng: String!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
`;

export default typeDefs;
