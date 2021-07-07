const { chatClient, userId } = require("./client");

// Channel ID is optional; if you leave it out, the ID is determined based on the list of members. The channel type controls the settings we’re using for this channel.
const createChannel = async (cType, cid, members, name) => {
  const channel = await chatClient.channel(cType, cid, {
    members,
    name,
  });
  const query = await channel.query();
  console.log('query', query);
  // await channel.create();
  // return await channel.watch();
  // fetch the channel state, subscribe to future updates

  // const text = "@Zack Hello there zack"

  // await channel.sendMessage({
  //   text: text,
  //   mentioned_users: ['Zack'],
  //   sender: userId
  // }).then((res) => console.log('message ID: ', res.message.id));

  return;
  // channel.on("message.new", (e) => {
  //   console.log(("received a new message", e.message.text));
  //   console.log(
  //     `Now have ${channel.state.messages.length} stored in local state`
  //   );
  // });
};

try {
  createChannel(
    "messaging",
    "testing-playground-04",
    ["steve"],
    "snoopys secret channel 2"
    ).then((r) => console.log('createChannel CALLED', r));
  } catch (e) {console.log('catch', e);}
