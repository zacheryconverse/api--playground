const { chatClient, user_id } = require("./client");

const messagingMembers = async () => {
  // a standard and recommended filter
  const filter = { type: "messaging", members: { $in: [user_id] } };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

const onlyMeAndMyFriend = async (friend) => {
  // filter for channels with only me and a friend
  const filter = {
    $and: [
      {
        members: {
          $in: ["steve"],
        },
      },
      {
        members: {
          $in: ["george"],
        },
      },
    ],
  };
  const sort = { last_message_at: -1 };
  const result = await chatClient.queryChannels(filter, sort);
  return result;
};

// onlyMeAndMyFriend("george").then((r) => console.log(r));
