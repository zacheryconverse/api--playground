const { serverClient } = require("./client");

const addModerator = async () => {
  const channel = serverClient.channel("messaging", "testing-playground-03");
  try {
    await channel.create();
  } catch (err) {
    console.error(err);
  }
  // return await channel.demoteModerators(["steve"]);
  // return await channel.addModerators(["Zack"]);
  // return await channel.addMembers(["Zack"]);
};

addModerator().then((r) => console.log(r));
