import { Router } from "express";


export const actorRouter = Router()

actorRouter.get('/', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

actorRouter.post('/', (req, res) => {
    console.log(req.body)
    res.send("actor is create")
})

actorRouter.get('/:id', (req, res) => {
    res.send('Hello world!');
});

actorRouter.put('/:id', (req, res) => {
    res.send('Hello world!');
});

actorRouter.delete('/:id', (req, res) => {
    res.send('Hello world!');
});