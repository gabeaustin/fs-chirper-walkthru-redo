import * as express from 'express';
import * as path from "path";
import * as morgan from "morgan";
import apiRouter from './routes';

const app = express();

app.use(express.static('public')); // ?? look up why PUBLIC
app.use(express.json()); // this is where we will make POST request to - it must be above the apiRouter
// this will log the api routes - using Express middleware
app.use(morgan("dev"));
app.use(apiRouter);
// if the route doesn't match then send to home page -- line below
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
