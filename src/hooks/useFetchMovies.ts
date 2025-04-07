import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { MoviesService } from "../api/moviesService";
import { movieType, orderByType } from "../models/IFilterParams";
import { useNavigate } from "react-router-dom";

export const useFetchMovies = (
  country: number | null,
  genre: number | null,
  orderBy: orderByType,
  type: movieType,
  page: number
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [targetMovies, setTargetMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesService.getMovies(
        country,
        genre,
        orderBy,
        page,
        type
      );

      setTargetMovies(response.items);
      setTotalPages(response.totalPages);

      console.log(response);
      console.log(response.total);
    } catch (error: any) {
      console.warn(error);
      setError(error);
      navigate("/error");
    } finally {
      setIsLoading(false);
    }
  };

  //useMemo

  useEffect(() => {
    console.log("render");
    fetchMovies();
  }, [page]);

  return {
    targetMovies,
    isLoading,
    error,
    totalPages,
    setTargetMovies,
    setTotalPages,
  };
};
