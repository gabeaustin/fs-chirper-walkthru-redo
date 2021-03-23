import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json()); // this is where we will make POST request to - it must be above the apiRouter
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
