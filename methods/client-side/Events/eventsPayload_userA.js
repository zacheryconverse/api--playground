require("dotenv").config("../.env");
const { createToken } = require("../../server-side/createToken");

const APP_KEY = process.env["APP_KEY"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "ryan";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("livestream", "watch-this-channel", {});

  const state = await channel.watch();

  return await channel.sendMessage({ text: "hey" });
};

test().then((r) => console.log(r));
