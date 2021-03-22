const { serverClient } = require("./client");

const createToken = (userID) => serverClient.createToken(userID);

exports.createToken = createToken;
