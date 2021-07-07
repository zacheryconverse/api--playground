require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"]; // CRA-Chat

// For client-side auth the client uses only the app_key
const client = StreamChat.getInstance(apiKey);

const userId = "Zachery";
// const extraData = {
//   image: '',
// };

// Fetch token from client-side method to create token
const token = createToken(userId);

// const connect = client.connectUser({ id: userId, extraData }, token);
// client.connectUser({ id: userId }, token);

// const cid = "Channel-01";
// const channel = client.channel("messaging", cid);
// await channel.create();

// return await channel.watch();
// fetch the channel state, subscribe to future updates

const text = "@Zack Hello there from Steve";

const sendMessage = async () => {
  return await channel.sendMessage({
    text: text,
  });
};

// const userID = "adminUser";

const createChannel = async () => {
  await client.connectUser({ id: userId }, token);

  const channel = client.channel("messaging", "channel-name", {
    members: ["Cody", "Zachery"],
  });
  await channel.create();
  const message = await channel.sendMessage({
    text: "hello there you",
  });

  return message.message.id;
};

const deleteMessage = async (messageId) => {
  await client.connectUser({ id: "adminUser" }, createToken("adminUser"));
  return await client.deleteMessage(messageId);
};

const filters = { members: { $in: ["Zachery"] } };

const getMessage = async () => {
  await client.connectUser({ id: "Zachery" }, createToken("Zachery"));
  // return await client.getMessage(messageId);
  return await client.search(
    filters,
    {
      'message.id': {
        $eq: '3c86b3ca-35a2-4b99-8927-9ea455868024'
      }
    }
  )
};

getMessage()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
