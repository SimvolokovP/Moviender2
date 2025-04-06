import { motion, useMotionValue, useTransform } from "framer-motion";
import { IMovie } from "../../models/IMovie";
import { FC } from "react";
import useLikedMoviesStore from "../../store/useLikedMovies";

interface MovieCardProps {
  movie: IMovie;
  targetMovies: IMovie[];
  setTargetMovies: (v: IMovie[]) => void;
}

const MovieCard: FC<MovieCardProps> = ({
  movie,
  targetMovies,
  setTargetMovies,
}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const { addMovie } = useLikedMoviesStore();

  const isFront =
    movie?.kinopoiskId === targetMovies[targetMovies.length - 1]?.kinopoiskId;

  const handleDragEnd = () => {
    const currentPos = x.get();
    if (Math.abs(currentPos) > 30) {
      setTargetMovies(
        [...targetMovies].filter(
          (oneMovie) => oneMovie?.kinopoiskId !== movie?.kinopoiskId
        )
      );
    }

    if (currentPos > 30) {
      addMovie(movie);
      console.log(movie);
    }
  };

  return (
    <>
      {isFront && (
        <div className="uppercase text-lg font-semibold text-[var(--tgui--accent_text_color)] text-center">
          {movie?.nameRu}
        </div>
      )}
      <motion.div className="movie-card">
        <motion.img
          src={movie.posterUrl ? movie.posterUrl : ""}
          alt={movie.nameRu}
          className="movie-image"
          style={{
            gridRow: 1,
            gridColumn: 1,
            x,
            opacity,
            transition: "0.125s transform",
            boxShadow: isFront
              ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
              : undefined,
          }}
          animate={{
            scale: isFront ? 1 : 0.98,
          }}
          drag={isFront ? "x" : false}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragEnd={handleDragEnd}
        />
      </motion.div>
    </>
  );
};
export default MovieCard;
