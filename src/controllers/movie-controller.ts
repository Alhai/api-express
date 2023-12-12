import express, { Router, Request, Response } from 'express';
import { createMovie, getMovies } from '../dals/movie-dal';


const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newMovie = await createMovie(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export const movieRouter: Router = router;
