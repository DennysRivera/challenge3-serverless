import express from 'express';
const app = express();

app.get('/', async (req, res) => {
    res.send(`Hello World, It's me Dio!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
