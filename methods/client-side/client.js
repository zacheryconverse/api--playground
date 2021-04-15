require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"];


// For client-side auth the client uses only the app_key
// const chatClient = new StreamChat(apiKey); // old way, but backward compatible
const chatClient = StreamChat.getInstance(apiKey);

const userId = "steve";
const extraData = {
  type: "doggo",
  name: "Steven",
};

// Fetch token from client-side method to create token
const token = createToken(userId);

const connect = chatClient.connectUser({ id: userId, extraData }, token);

exports.chatClient = chatClient;
exports.userId = userId;
