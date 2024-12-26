const redis = require('redis');

// Import and create a Redis client
const client = redis.createClient();

client.on('error', (err) => console.error('Redis Client Error:', err));

async function init() {
    try {
        await client.connect(); // Connect to the Redis server

        const streamName = 'tem'; // Name of the Redis stream
        const id = '*'; // Use '*' for an auto-generated ID
        const fields = ['t', '65', 'h', '47.5']; // Key-value pairs as alternating arguments

        // Use sendCommand to call xadd
        const result = await client.sendCommand(['XADD', streamName, id, ...fields]);
        console.log('Stream entry ID:', result);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await client.disconnect(); // Disconnect the client
    }
}

init();
