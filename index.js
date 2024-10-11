import express from 'express';
const app = express();

app.get('/', async (req, res) => {
    res.send(`Hello World, It's me Dio!`);
});

app.get('/404', (req, res) => {
    res.send('This page does not exist');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
