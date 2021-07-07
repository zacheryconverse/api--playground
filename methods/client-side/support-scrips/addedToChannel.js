require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const apiKey = process.env["API_KEY"];

// For client-side auth the client uses only the app_key
const chatClient = StreamChat.getInstance(apiKey);

const userId = "Cody";

const token = createToken('Admin');

const cid = "added5";

const text = "Hello Steve";

const test = async () => {
  await chatClient.connectUser({ id: "Admin" }, token);

  chatClient.on("notification.added_to_channel", () => {
    console.log("Admin was added as a member to a channel");
  });

  const channel = chatClient.channel("messaging", 'new-Channel', { members: ["Admin"] });
  await channel.watch();

  channel.on('channel.updated', () => {console.log('Channel was updated');})
  await channel.addMembers(['Zack']);

  return "complete";
};

test()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
