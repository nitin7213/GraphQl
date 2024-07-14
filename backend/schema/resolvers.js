import { USERS } from "../data/user.js";
import { TODOS } from "../data/todo.js";

const fetchTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TODOS);
    }, 100); // Simulate a delay of 100ms
  });
};

const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS);
    }, 100); // Simulate a delay of 100ms
  });
};

const fetchUserById = async (id) => USERS.find((user) => user.id == id);

const createUserInDataSource = async (input) => {
  const newUser = {
    id: String(USERS.length + 1),
    ...input,
  };
  USERS.push(newUser);
  return newUser;
};

const deleteUserInDataSource = async (id) => {
  const userIndex = USERS.findIndex((user) => user.id == id);
  if (userIndex === -1) return false;
  USERS.splice(userIndex, 1);
  return true;
};

const fetchUserByTodoId = async (userId) =>
  USERS.find((user) => user.id == userId);

const resolvers = {
  Query: {
    getTodos: async () => await fetchTodos(),
    getAllUsers: async () => await fetchUsers(),
    getUser: async (parent, { id }) => await fetchUserById(id),
  },

  Mutation: {
    createUser: async (parent, { input }) =>
      await createUserInDataSource(input),
    deleteUser: async (parent, { id }) => await deleteUserInDataSource(id),
  },

  Todo: {
    user: async (todo) => await fetchUserByTodoId(todo.userId),
  },
};

export default resolvers;
