import {
  IconButton,
  Modal,
  Placeholder,
  Spinner,
} from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark";
import { FC, useState } from "react";
import { IOneMovie } from "../../models/IMovie";
import { MoviesService } from "../../api/moviesService";

interface DescrModalProps {
  movieId: number;
}

const DescrModal: FC<DescrModalProps> = ({ movieId }) => {
  const [selectedMovie, setSelectedMovie] = useState<IOneMovie | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = async () => {
    try {
      console.log("FETCH");
      setIsLoading(true);
      if (movieId) {
        const movie = await MoviesService.getMovieById(movieId);
        console.log(movie);

        setSelectedMovie(movie);
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
  };

  return (
    <Modal
      title="1"
      aria-describedby={undefined}
      header={<Modal.Header />}
      trigger={
        <IconButton onClick={fetchMovie} size="s">
          <Icon20QuestionMark />
        </IconButton>
      }
    >
      {isLoading && (
        <Placeholder>
          <Spinner size="l" />
        </Placeholder>
      )}

      {error ? (
        <Placeholder
          description={"Sorry, please try again later"}
          header={"Error"}
        />
      ) : (
        <Placeholder
          description={selectedMovie?.description}
          header={""}
        ></Placeholder>
      )}
    </Modal>
  );
};

export default DescrModal;
