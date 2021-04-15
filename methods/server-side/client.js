require("dotenv").config({ path: __dirname + "/.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];
const StreamChat = require("stream-chat").StreamChat;

// For server-side auth the client uses app_key and secret
const serverClient = StreamChat.getInstance(app_key, secret);
// const serverClient = new StreamChat(app_key, secret);
exports.serverClient = serverClient;
