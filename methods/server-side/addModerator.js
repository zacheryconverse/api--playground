const { serverClient } = require("./client");
const { createToken } = require("./createToken");

const addModerator = async () => {
  const channel = serverClient.channel("messaging", {
    members: ['Zachery', 'user2', 'user3']
  });
  try {
    await channel.create();
  } catch (err) {
    console.error(err);
  }
  // return await channel.demoteModerators(["steve"]);
  return await channel.addModerators(["Zachery"]);
  // return await channel.addMembers(["Zack"]);
};

const flagMessage = async () => {
  console.log(serverClient);
  // return await serverClient.flagMessage("3c86b3ca-35a2-4b99-8927-9ea455868024");
};

const unflagMessage = async () => {
  // await serverClient.connectUser({ id: "Zachery" }, createToken("Zachery"));
  // return await serverClient.unflagMessage("3c86b3ca-35a2-4b99-8927-9ea455868024");
  // return await client.unflagMessage()
  console.log(createToken('Zachery'));
};

const getFlaggedMessages = async () => {
  try {
    return serverClient.queryMessageFlags({
      // channel_cid: "messaging:Zack",
      user_id: { $in: ["Zachery"] },
    });
  } catch (e) {
    console.log('catch', e);
  }
};

addModerator()
  .then((r) => console.log(r))
  .catch((e) => console.log('error', e));

// flagMessage()
//   .then((res) => console.log("RESULT: ", res))
//   .catch((err) => console.log("Error: ", err));
// getFlaggedMessages().then((r) => console.log(r));

// unflagMessage()
//   .then((res) => console.log("RESULT: ", res))
//   .catch((err) => console.log("Error: ", err));
