const { serverClient } = require("./client");

const userArray = [
  { id: "scott" },
  { id: "mark" },
  { id: "bob" },
  { id: "bill" },
  { id: "sean" },
  { id: "steve" },
];

const upsertMany = async (users) => {
  return await serverClient.upsertUsers(userArray);
};

const upsertOne = async (userId) => {
  return await serverClient.upsertUser({ id: userId });
};

const makeAdmin = async (userId) => {
  return await serverClient.upsertUser({
    id: userId,
    role: "user",
  });
};

// upsertMany(userArray).then((r) => console.log(r));
makeAdmin("steve").then((r) => console.log(r));
