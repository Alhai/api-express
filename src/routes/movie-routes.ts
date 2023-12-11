import { Router } from "express";

export const movieRouter = Router()
/////// Movie
movieRouter.get('/', (req, res) => {
  res.send('Hello world!');
});

movieRouter.post('/',(req, res)=>{

})

movieRouter.get('/:id', (req, res) => {
  res.send('Hello world!');
});

movieRouter.put('/:id', (req, res) => {
  res.send('Hello world!');
});

movieRouter.delete('/:id', (req, res) => {
  res.send('Hello world!');
});
