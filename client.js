// client to interact with the redis server
const { Redis } = require('ioredis')

const client = new Redis(); 
// Hits the port 6379 by default

module.exports = client;
