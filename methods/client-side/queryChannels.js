// const { chatClient, userId } = require("./client");
const StreamChat = require("stream-chat").StreamChat;
const { createToken } = require("../server-side/createToken");

const chatClient = StreamChat.getInstance("awdc7hz3vqta ");
const userId1 = "710QhunBOXgZ3cWmUNliDRgdQMh1";
const userId2 = "G30XqBvhedaLd2dPMtI0CIYXvy63";
const userId3 = "steve";
const userId4 = "Cody";

// const filter = { type: "messaging" };
const filter = { type: "messaging", members: { $in: [userId4] } };
const sort = { last_message_at: -1 };

const token = createToken(userId1);
const connect = chatClient.connectUser({ id: userId1 }, token);

const test = async () => {
  return chatClient.queryChannels(filter, sort);
};

test()
  .then((res) => console.log("Result", res))
  .catch((err) => console.error(err));

// Platonic Credentials:
// key: awdc7hz3vqta
// secret: nukb23rqv5qubctmsh8w4mrmwj3rj99r7qbyck7ymr2uzx25w3hc28h5saxuzbuz
// app id:    1115365
// channel id: e3dab125-43c8-45a7-97c0-8c37e620d040
// users id: 710QhunBOXgZ3cWmUNliDRgdQMh1  and G30XqBvhedaLd2dPMtI0CIYXvy63

// const messagingMembers = async () => {
//   // a standard and recommended filter
//   const filter = { type: "messaging", members: { $in: [userId] } };
//   const sort = { last_message_at: -1 };
//   const result = await chatClient.queryChannels(filter, sort);
//   return result;
// };

// const onlyMeAndMyFriend = async (friend) => {
//   // filter for channels with only me and a friend
//   const filter = {
//     $and: [
//       {
//         members: {
//           $in: ["steve"],
//         },
//       },
//       {
//         members: {
//           $in: ["george"],
//         },
//       },
//     ],
//   };
//   const sort = { last_message_at: -1 };
//   const result = await chatClient.queryChannels(filter, sort);
//   return result;
// };



// onlyMeAndMyFriend("george").then((r) => console.log(r));

// const chatClient = StreamChat.getInstance(
//   "awdc7hz3vqta",
//   "nukb23rqv5qubctmsh8w4mrmwj3rj99r7qbyck7ymr2uzx25w3hc28h5saxuzbuz"
// );
// const userId1 = "710QhunBOXgZ3cWmUNliDRgdQMh1";
// const userId2 = "G30XqBvhedaLd2dPMtI0CIYXvy63";

// const filter = { id: "e3dab125-43c8-45a7-97c0-8c37e620d040" };
// const sort = { last_message_at: -1 };

// const token = createToken(userId2);
// // const connect = chatClient.connectUser({ id: userId2 }, token);

// const test = async () => {
//   const channels = await chatClient.queryChannels(filter, sort);
//   return channels[0].state
// }

// test().then(res => console.log('Result', res)).catch(err => console.error(err));
