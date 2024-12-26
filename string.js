const client = require('./client');

// async function init() {
//     const result = await client.get('message:3');
//     console.log(result);
// }

// async function init() {
//     await client.set('msg:9', 'Hello from Nodejs');
//     const result = await client.get('msg:9');
//     console.log(result);
// }


// async function init() {
//     await client.set('msg:1', 'Will expire in 20s');
//     await client.expire("msg:1", 20);
// }


async function init() {
    const result = await client.get('msg:1');
    console.log(result);
}

init();