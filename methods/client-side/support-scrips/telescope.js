const { createToken } = require("../../server-side/createToken");
const StreamChat = require("stream-chat").StreamChat;

const key = "h5rzbu5zad43"; // App --> BAC... Dev
const secret =
  "9erjd3mfy6jzdkqzcrw6cm49m2ujub54e5yn3ahmqbjr7whrxgkhby432nfu69pn";

const client = StreamChat.getInstance(key);
  // id, role, created_at, updated_at, last_active, banned, online, shadow_banned
  // should have above plus image, name, phone, email

// const client = StreamChat.getInstance(key, secret); // same as above
// const client = new StreamChat(key); // Error - tokens can only be created server-side using the API Secret
// const client = new StreamChat(key, secret); // error

const user = "user-305";

const test = async () => {
  try {
    const token1 = client.createToken(user);
    console.log(token1);
    const token = createToken(user);
    console.log(token);
    await client.connectUser({ id: user }, token);

    const filter = {
      id: { $in: [ user ] }
    };

    return await client.queryUsers(filter);

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
