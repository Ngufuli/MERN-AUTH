import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res)=>res.send('Server is ready'));

app.liste(PORT, ()=>console.log(`Server has started at port${PORT}`));

