// speed up jsonplaceholder
const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();

app.get('/', async (req, res) => {

    // check whether it is in cache
    const cacheValue = await client.get('todos');
    if(cacheValue) return res.json(JSON.parse(cacheValue));

    // if not in cache
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );
    await client.set('todos', JSON.stringify(data));

    client.expire('todos', 20);
    
    return res.json(data);


});

app.listen(9000);