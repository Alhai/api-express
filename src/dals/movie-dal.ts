import { Movie } from '../schema/movie-schema';

export async function createMovie(movieData: any): Promise<any> {
  try {
    const movie = new Movie(movieData);
    const savedMovie = await movie.save();
    return savedMovie;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create movie');
  }
}

export async function getMovies(): Promise<any> {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    console.error(error);
    throw new Error('movies not find');
  }
}

