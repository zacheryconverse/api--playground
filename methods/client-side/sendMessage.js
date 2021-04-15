require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"];

// For client-side auth the client uses only the app_key
// const chatClient = new StreamChat(apiKey); // old way, but backward compatible
const chatClient = StreamChat.getInstance(apiKey);

const userId = "Zachery";

// Fetch token from client-side method to create token
const token = createToken(userId);

// const connect = chatClient.connectUser({ id: userId, extraData }, token);
chatClient.connectUser({ id: userId }, token);

const cid = "Zack";
const channel = chatClient.channel("messaging", cid);
channel.create();

// return await channel.watch();
// fetch the channel state, subscribe to future updates

const text = "@Zack Hello there Zachery";

const test = async () => {
  return await channel.sendMessage({
    text: text,
    mentioned_users: ["Zack"],
    sender: userId,
  });
};

test()
  .then((res) => console.log("RESULT: ", res.message.mentioned_users))
  .catch((err) => console.log("Error: ", err));

