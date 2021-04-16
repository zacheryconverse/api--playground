const { serverClient, userId } = require("../server-side/client");

// const deleteMessage = async (messageId, hardDelete) => {
//   return serverClient.deleteMessage(messageId, hardDelete);
// };

// deleteMessage("4f32394e-d866-4794-87af-0998b4de82c4", false).then((res) =>
//   console.log(res)
// );


// const test = async () => {
//   return serverClient.deleteMessage(
//     "04143982-0e4e-4484-8434-8699e5c63f42",
//     true
//   );
// }

test().then(res => console.log('RESULT', res)).catch(err => console.error('ERROR', err));
