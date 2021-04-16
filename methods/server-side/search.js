const { serverClient } = require("./client");

const search = async () => {
  const channel = serverClient.channel("messaging", "Zack");
  // try {
  //   await channel.create();
  // } catch (err) {
  //   console.error(err);
  // }
  // return await channel.search({ 'user.id': "Zack" });
  // return await serverClient.search({"user.id":"Zack"});
  // const filters = { members: { $in: ["Zack"] } };
  // return await serverClient.search(filters);
  // return await channel.search(filters);
  const someId = "Zachery";
  // return await channel.search({ sender: someId });
  return await serverClient?.search(
    {
      type: "messaging",
    },
    {
      parent_id: {
        $ne: "",
      },
    }
  );
  // return await serverClient.search({ 'mentioned_users.id': { $contains: 'Zack' } });
  // return await channel.search({ sender: "steve" });
};

search().then((r) => console.log("RESULT", r.results));
