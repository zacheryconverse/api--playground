const { createToken } = require("../../server-side/createToken");
const StreamChat = require("stream-chat").StreamChat;

const key = "7wxcq3cvaz45"; // App --> Basic chat
const secret =
  "jardsj3ru6a7sxtdc8m7zfwsj32h3ckkd2wgnnkbzpb34kjdh9csec7gm47pyv5x";

const client = StreamChat.getInstance(key); // id, role, created_at, updated_at, last_active, banned, online, shadow_banned
// const client = StreamChat.getInstance(key, secret); // same as above
// const client = new StreamChat(key); // Error - tokens can only be created server-side using the API Secret
// const client = new StreamChat(key, secret); // error

const user = "Zachery";

const test = async () => {
  try {
    const token1 = client.createToken(user);
    console.log(token1);
    const token = createToken(user);
    console.log(token);
    await client.connectUser({ id: user }, token1);

    const filter = {
      id: { $in: [user] },
    };

    const sort = { last_active: -1 };
    const options = { limit: 10 };

    return await client.queryUsers(filter, sort, options);

    // return await client.queryUsers({
    //   id: user,
    // });
  } catch (e) {
    console.log("error", e);
  } finally {
    await client.disconnectUser();
  }
};

test()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
