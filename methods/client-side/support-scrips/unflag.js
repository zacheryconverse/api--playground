require("dotenv").config({ path: __dirname + "/.env" });
const { createToken } = require("../../server-side/createToken");

const StreamChat = require("stream-chat").StreamChat;
const key = process.env["APP_KEY"]; // App --> CRA-Chat
// const secret = process.env["APP_SECRET"]; // App --> CRA-Chat

// const serverClient = StreamChat.getInstance(key, secret);
// For client-side auth the client uses only the app_key
const client = StreamChat.getInstance(key);

const userId1 = "Zachery";
const userId2 = "user2";
const userId3 = "user3";
const userId4 = "user4";

// const createToken = (userID) => serverClient.createToken(userID);

const test = async () => {
  // init users 1, 2, and 3
  // user3 creates channel
  // add user4 as member
  // user4 sends message
  // user2 flags user4's message
  // Zachery becomes moderator
  // Zachery unflags message
  try {

    const token = createToken(userId3);
    await client.connectUser({ id: userId3 }, token);

    const channel = client.channel("messaging", {
      members: ['Zachery', 'user2', 'user3', 'user4']
    });
    await channel.watch();

    // const message = await channel.sendMessage({
    //   text: 'hello there 2'
    // });

    // return message.message.id;
    // user3 132e23da-6f29-41dd-9b76-e95873e93e40
    // user4 dddbfa56-212a-42dd-90e4-31f2942b2244
    // user4 a2f7f861-96f6-450c-8d5a-83afbe5f5c8f
//
    // return await client.flagMessage("a2f7f861-96f6-450c-8d5a-83afbe5f5c8f");
    return await client.unflagMessage("a2f7f861-96f6-450c-8d5a-83afbe5f5c8f")
  } catch (e) {
    console.log('catch', e)
  }
};

const sendMessage = async () => {
  return await channel.sendMessage({
    text: text,
  });
};

const deleteMessage = async (messageId) => {
  await client.connectUser({ id: "adminUser" }, createToken("adminUser"));
  return await client.deleteMessage(messageId);
};

const filters = { members: { $in: ["Zachery"] } };

const getMessage = async () => {
  // await client.connectUser({ id: "Zachery" }, createToken("Zachery"));
  return await client.getMessage("dddbfa56-212a-42dd-90e4-31f2942b2244");
  // return await client.search(filters, {
  //   "message.id": {
  //     $eq: "3c86b3ca-35a2-4b99-8927-9ea455868024",
  //   },
  // });
};

const getFlaggedMessages = async () => {
  await client.connectUser({ id: "Zachery" }, createToken("Zachery"));
  // return await client.getMessage(messageId);
  return await client.queryMessageFlags({
    channel_cid: "messaging:!members--NijcQOv3bIvIKTYCxSzLAizjetqi7jOKyss3N8KhW4",
    user_id: { $in: ["Zachery"] },
  });
};

const unflagMessage = async () => {
  await client.connectUser({ id: "Zachery" }, createToken("Zachery"));
  // return await client.flagMessage("3c86b3ca-35a2-4b99-8927-9ea455868024");
  return await client.unflagMessage("3c86b3ca-35a2-4b99-8927-9ea455868024")
}

// getMessage()
//   .then((res) => console.log("RESULT: ", res))
//   .catch((err) => console.log("Error: ", err));

// getFlaggedMessages()
//   .then((res) => console.log("RESULT: ", res))
//   .catch((err) => console.log("Error: ", err));

// unflagMessage()
//   .then((res) => console.log("RESULT: ", res))
//   .catch((err) => console.log("Error: ", err));

test()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
