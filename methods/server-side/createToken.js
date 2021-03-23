const { serverClient } = require("./client");
const userId = 'Zachery';
const createToken = (userID) => serverClient.createToken(userID);

exports.createToken = createToken;

console.log(createToken(userId));