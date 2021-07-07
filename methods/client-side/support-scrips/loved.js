const { createToken } = require("../../server-side/createToken");
const StreamChat = require("stream-chat").StreamChat;

const key = "kbqjy92ym845"; // App --> Loved Test
// const key = "m63gwxe9gmqh"; // App --> Loved
const secret = '3jeu8gdn874mtzt2u4wv52jf9f64phbdaj4tu7kpg5e2hbreend563hw5fwcgyt7'; // App --> Loved Test
// const secret =
  // "crz35ph7ebk2h28nwdebssjpn28u459qum2dk2du9n3gktezvjzw7e9g479j8pye"; // App --> Loved

// const client = StreamChat.getInstance(key, secret);
const client = new StreamChat(key, secret);

const missingDataUser = "2836d622-0249-417a-821b-68177413d7a6";
const correctDataUser = "925d10ce-74a0-471f-a7bc-3d65beac24ab";
const userId3 = "75802b31-f9fa-4c74-adbd-b3b5124561a0";
const user4 = "f6b88730-2d9b-4ecf-814e-f7fa9e92760d";

const test = async () => {
  try {
    const token = client.createToken(user4);
    // console.log(token);
    // const token = createToken(user4);
    await client.connectUser(
      { id: user4 },
      token
    );

    return await client.queryUsers({
      id: user4,
    });

  } catch (e) { console.log('error', e); }
  finally { await client.disconnectUser(); }
};

test()
  .then((res) => console.log("RESULT: ", res))
  .catch((err) => console.log("Error: ", err));
