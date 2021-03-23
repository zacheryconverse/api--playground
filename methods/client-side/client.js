require("dotenv").config({ path: __dirname + "/.env" });

const app_key = process.env["APP_KEY"];
// const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

const { createToken } = require("../server-side/createToken");

// For client-side auth the client uses only the app_key
const chatClient = new StreamChat(app_key);

const user_id = "steve";
const extraData = {
  type: "doggo",
};

// Fetch token from client-side method to create token
const token = createToken(user_id);

const connect = chatClient.connectUser({ id: user_id, extraData }, token);

exports.chatClient = chatClient;
exports.user_id = user_id;
