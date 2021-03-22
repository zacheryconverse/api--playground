require("dotenv").config("../.env");
const { createToken } = require("../../server-side/createToken");

const APP_KEY = process.env["APP_KEY"];
const StreamChat = require("stream-chat").StreamChat;

const listToPresenceChanges = async () => {
  const client = new StreamChat(APP_KEY, { timeout: 6000 });

  const userID = "callum";
  const token = createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("livestream", "watch-this-channel", {});

  const state = await channel.watch({ presence: false });

  channel.on("user.watching.start", (event) => {
    // handle change
    console.log(`${event.user.id} started watching`);
  });
  channel.on("user.watching.stop", (event) => {
    // handle change
    console.log(`${event.user.id} stopped watching`);
  });

  channel.on("message.new", (event) => {
    // handle change
    console.log(`new message, ${event.message.text}`);
  });

  // return channel;
};

listToPresenceChanges().then((r) => console.log(r));
