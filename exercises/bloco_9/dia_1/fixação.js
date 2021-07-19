const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn)
};

const introducing = (obj) => `Hello! My name is ${obj.firstName} ${obj.lastName}`
const nationality = (obj) => `${obj.firstName} is ${obj.nationality}`


assert.strictEqual(getUser(introducing), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(nationality), "Ivan is Russian"); // complete a chamada da função de getUser