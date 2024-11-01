import express from 'express';
const app = express();
const ok;

app.get('/', async (req, res) => {
    res.send(`<h1>Hello World, It's me Dio!!</h1>`);
});

app.get('/404', (req, res) => {
    res.send('This page does not exist');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
