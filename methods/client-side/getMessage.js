import { StreamChat } from 'stream-chat';
const apiKey = process.env("API_KEY");

const client = StreamChat.getInstance(apiKey);
const token = client.createToken(apiKey);

await client.connectUser({
  id: 'Zack',
  name: 'Zachery',
}, token);

console.log('token', token);
