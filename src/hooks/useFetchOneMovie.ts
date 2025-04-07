import { useMemo, useState } from "react";
import { MoviesService } from "../api/moviesService";

export const useFetchOneMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchedMovie = useMemo(async () => {
    try {
      setIsLoading(true);
      if (movieId) {
        const movie = await MoviesService.getMovieById(movieId);
        console.log(movie);

        return movie;
      } else {
        return null;
      }
    } catch (error: any) {
      console.warn(error);
      setError(error);
      throw "error";
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);
  return { fetchedMovie, isLoading, error };
};
