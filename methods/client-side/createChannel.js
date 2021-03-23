const { chatClient, user_id } = require("./client");

const createChannel = async (type, id, members, name) => {
  const channel = chatClient.channel(type, id, {
    members,
    name,
  });
  return await channel.create();
};

createChannel(
  "messaging",
  "testing-playground-03",
  ["steve"],
  "snoopys secret channel"
).then((r) => console.log(r));
