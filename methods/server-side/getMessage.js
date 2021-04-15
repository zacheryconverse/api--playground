const { serverClient } = require('../server-side/client');

const test = async () => {

  return serverClient.getMessage("4da995b3-a8fb-44b1-ba6f-53215873432e");
};

test().then(res => console.log('RESULT', res)).catch(err => console.error('ERROR', err));
