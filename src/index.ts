import express, { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { movieRouter } from './controllers/movie-controller';
import { actorRouter } from './controllers/actor-controller';
import "dotenv/config"

const port = process.env.PORT || 1337;
const MONGODB_URL = process.env.MONGO_URL as string

const app = express();
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://ali:9Tj8er9DIeA5CK38@apiexpress.hmiffkr.mongodb.net/?retryWrites=true&w=majority", {}).then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// mongoose
//   .connect(MONGODB_URL)
//   .then((result) => {
//     console.log("Connexion à MongoDB réussie !", result);
//   })
//   .catch((error) => {
//     console.log("Connexion à MongoDB échouée !", error);
//   });


app.get('/', (req, res) => {
  res.send('Hello world!');
});


const apiRouter = Router()

apiRouter.use('/actors', actorRouter)
apiRouter.use('/movies', movieRouter)

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log('Server is listening on port 1337');
});



