import express, { Router, Request, Response } from 'express';
import { createActor, getActors } from '../dals/actor-dal';


const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const actors = await getActors();
    res.status(200).json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newActor = await createActor(req.body.data);
    res.status(201).json(newActor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', e: error});
  }
});

router.get('/', async (req : Request, res : Response) =>{
  try {
    
  } catch (error) {
    
  }
})


export const actorRouter: Router = router;
