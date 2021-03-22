const { chatClient, user_id } = require("./client");

const updateChannel = async (type, id, data) => {
  const channel = chatClient.channel(type, id, data);
  return channel.update(data);
};

updateChannel("messaging", "testing-playground-03", {
  private: "hide",
}).then((r) => console.log(r));
