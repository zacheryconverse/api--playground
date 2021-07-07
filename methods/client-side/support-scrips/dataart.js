const { createToken } = require("../../server-side/createToken");
const StreamChat = require("stream-chat").StreamChat;

// const key = "st5gmynyjxde"; // App --> monument-QA
const key = "gpvkpwpc6a4k"; // App --> monument-local
const secret =
  "u3ubxmpm8sh6thker45cdxcxk7zbnx8rrxwfnzymfghwz383mp9w9gdvf355bc34";

const client = StreamChat.getInstance(key);

// const client = StreamChat.getInstance(key, secret);
// const client = new StreamChat(key);
// const client = new StreamChat(key, secret);

// const user = "0df06610-c070-4391-8dcb-5aea098f926f"; // user
// const user = "a30f24b6-e114-4dbe-9eca-60716b4891af";
// const user = "9e54edd8-301d-4535-899c-737d3155c219";
const user = "a95a1680-f6aa-4427-8296-7d17b343ea24"; // local

const test = async () => {
  try {
    // const token1 = client.createToken(user);
    // console.log(token1);
    // const token = createToken(user);
    // console.log(token);
    // await client.connectUser({ id: user }, token1);

    const filter = {
      // id: { $in: [user] },
      // members: { $in: [user] }
      // type: {
      //   $in: [
          type: "community-public",

      //     "community-admin-post",

      //     "community-admin-post-readonly",

      //     "support-group",
      //   ],
      // },
    };

    const result = await client.queryChannels(filter);
    console.log('result', result);
    return result;
    // return await client.queryChannels({
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
