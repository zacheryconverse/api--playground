require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"];

// For client-side auth the client uses only the app_key
// const chatClient = new StreamChat(apiKey); // old way, but backward compatible
const chatClient = StreamChat.getInstance(apiKey);

// const userId = "Cody";

// Fetch token from client-side method to create token
// const token = createToken(userId);

// const connect = chatClient.connectUser({ id: userId, extraData }, token);
// chatClient.connectUser({ id: userId }, token);

// const cid = "Zack";
// const channel = chatClient.channel("messaging", cid);
// channel.create();

// return await channel.watch();
// fetch the channel state, subscribe to future updates

// const text = "@Zack Hello there Steve";

// const test = async () => {
//   return await channel.sendMessage({
//     text: text,
//   });
// };

// const userID = "adminUser";

const createChannel = async () => {
  await chatClient.connectUser({ id: userId }, token);

  const channel = chatClient.channel("messaging", "shopWare-01", {
    members: ["adminUser", "Cody"],
  });
  await channel.create();
  const message = await channel.sendMessage({
    text: 'hello there'
  });

  return message.message.id;
};

const deleteMessage = async (messageId) => {
  await chatClient.connectUser({ id: 'adminUser' }, createToken('adminUser'));
  return await chatClient.deleteMessage(messageId);
}

const userId = 'Zachery';

// const filter = { type: "messaging" };
const filter = { type: "messaging", members: { $in: [userId] } };
const sort = { last_message_at: -1 };

const token = createToken(userId);
const connect = chatClient.connectUser({ id: userId }, token);

const test = async () => {
  const results = await chatClient.queryChannels(filter, sort, {});
  console.log(results);
  return;
};

test()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));

