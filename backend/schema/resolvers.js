const { USERS } = require("../data/user");
const { TODOS } = require("../data/todo");

const resolvers = {
  Todo: {
    user: (todo) => USERS.find((user) => user.id == todo.userId),
  },
  Query: {
    getTodos: () => TODOS,
    // getAllUsers: () => USERS,
    // getUser: (parent, { id }) => USERS.find((user) => user.id == id),
  },
};

module.exports = resolvers;
