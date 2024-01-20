import express from 'express';

// Crating Server
const server = express();


server.get('/', (_, res) => {


    return res.send('Hello World!');
});



export { server };