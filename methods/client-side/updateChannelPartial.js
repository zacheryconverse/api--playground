const { chatClient, userId } = require("./client");

const updateChannelPartial = async (type, id, data) => {
  const channel = chatClient.channel(type, id, data);
  return channel.updatePartial({ set: data });
};

updateChannelPartial("messaging", "testing-playground-03", {
  snoopy: "oh yeah",
}).then((r) => console.log(r));
