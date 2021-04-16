require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"]; // CRA-Chat

// For client-side auth the client uses only the app_key
const client = StreamChat.getInstance(apiKey);

const userId = "Zachery";

// Fetch token from client-side method to create token
const token = createToken(userId);

// const connect = chatClient.connectUser({ id: userId, extraData }, token);
// client.connectUser({ id: userId }, token);

// const cid = "Channel-01";
// const channel = client.channel("messaging", cid);
// channel.create();

// return await channel.watch();
// fetch the channel state, subscribe to future updates

const text = "@Zack Hello there Steve";

const test = async () => {
  return await channel.sendMessage({
    text: text,
  });
};

const userID = "adminUser";

const createChannel = async () => {
  await client.connectUser({ id: userId }, token);

  const channel = client.channel("messaging", "shopWare-01", {
    members: ["adminUser", "Cody"],
  });
  await channel.create();
  const message = await channel.sendMessage({
    text: "hello there",
  });

  return message.message.id;
};

const deleteMessage = async (messageId) => {
  await client.connectUser({ id: "adminUser" }, createToken("adminUser"));
  return await client.deleteMessage(messageId);
};

deleteMessage("75f0633b-8c87-4bae-9aa2-974ea0ac8f94")
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
