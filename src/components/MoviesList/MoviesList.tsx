import { Dispatch, FC, SetStateAction } from "react";
import { IMovie } from "../../models/IMovie";
import MovieCard from "../MovieCard/MovieCard";

interface MoviesListProps {
  movies: IMovie[];
  setTargetMovies: Dispatch<SetStateAction<IMovie[]>>;
}

const MoviesList: FC<MoviesListProps> = ({ movies, setTargetMovies }) => {
  return (
    <div className="grid w-full h-[500px] place-items-center">
      {movies.map((movie) => (
        <MovieCard
          key={movie.kinopoiskId}
          targetMovies={movies}
          setTargetMovies={setTargetMovies}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MoviesList;
