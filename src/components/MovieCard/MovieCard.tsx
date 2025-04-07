import { motion, useMotionValue, useTransform } from "framer-motion";
import { IMovie } from "../../models/IMovie";
import { FC, useState } from "react";
import useLikedMoviesStore from "../../store/useLikedMovies";
import DescrModal from "../DescrModal/DescrModal";
import {  Skeleton } from "@telegram-apps/telegram-ui";

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
  const [isImageLoaded, setImageLoaded] = useState(false);
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
    }
  };

  return (
    <>
      {isFront && (
        <div className="flex items-center gap-2 text-center flex-wrap justify-center">
          <div className="uppercase text-base font-semibold text-[var(--tgui--accent_text_color)]">
            {movie?.nameOriginal}
          </div>
          <DescrModal movieId={movie.kinopoiskId} />
        </div>
      )}

      {/* {isFront && (
        <div className="absolute z-4 left-0 right-0 flex justify-between w-sm">
          <Button>no</Button>
          <Button>like</Button>
        </div>
      )} */}

      <motion.div className="movie-card">
        <Skeleton visible={!isImageLoaded} withoutAnimation={false}>
          <motion.img
            src={movie.posterUrl ? movie.posterUrl : ""}
            alt={movie.nameRu}
            className="movie-image"
            style={{
              position: "relative",
              border: isFront
                ? "2px solid var(--tgui--accent_text_color)"
                : "2px solid transparent",
              borderRadius: "4px",
              zIndex: 3,
              width: "252px",
              height: "344px",
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
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </Skeleton>
      </motion.div>
    </>
  );
};

export default MovieCard;
