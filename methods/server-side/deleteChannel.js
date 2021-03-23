const { serverClient } = require('./client');

const deleteChannel = async (channelType, channelId) => {
  const channel = serverClient.channel(channelType, channelId);
  try {
    await channel.create()

  } catch (err) {
    console.error(err);
  }
  return await channel.delete();
}

deleteChannel('messaging', 'testing-playground-03').then(r => console.log(r));
