import { useEffect, useState } from "react";
import { MoviesService } from "../../api/moviesService";
import useFiltersStore from "../../store/useFiltersStore";
import { IMovie } from "../../models/IMovie";
import { Link, useNavigate } from "react-router-dom";
import MoviesLoader from "../../components/MoviesLoader/MoviesLoader";
import MoviesList from "../../components/MoviesList/MoviesList";
import { Button } from "@telegram-apps/telegram-ui";
import ResetMoviesList from "../../components/ResetMoviesList/ResetMoviesList";

const SearchResultPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [targetMovies, setTargetMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const navigate = useNavigate();

  const { country, genre, orderBy, page, type, setPage } = useFiltersStore();

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

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div className="page">
      {isLoading ? (
        <MoviesLoader />
      ) : (
        <>
          {targetMovies.length ? (
            <MoviesList
              movies={targetMovies}
              setTargetMovies={setTargetMovies}
            />
          ) : (
            <ResetMoviesList
              disabled={page >= totalPages}
              page={page}
              setPage={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
