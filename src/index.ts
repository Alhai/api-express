import express from 'express';
import { movieRouter } from './routes/movie-routes';
import { actorRouter } from './routes/actor-routes';
import mongoose from 'mongoose';
import {Movie} from "./schema/movie-schema"
import bodyParser from 'body-parser';

const port = process.env.PORT || 1337;

const app = express();
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://ali:9Tj8er9DIeA5CK38@apiexpress.hmiffkr.mongodb.net/?retryWrites=true&w=majority", {}).then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
  
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api/movies', movieRouter)
app.use('/api/actors', actorRouter)
app.listen(port, () => {
  console.log('Server is listening on port 1337');
});

export default app;