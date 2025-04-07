import {
  IconButton,
  Modal,
  Placeholder,
  VisuallyHidden,
} from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark";
import { FC, useEffect, useState } from "react";
import { useFetchOneMovie } from "../../hooks/useFetchOneMovie";
import { IOneMovie } from "../../models/IMovie";

interface DescrModalProps {
  movieId: number;
}

const DescrModal: FC<DescrModalProps> = ({ movieId }) => {
  const [selectedMovie, setSelectedMovie] = useState<IOneMovie | null>(null);

  const { fetchedMovie, error } = useFetchOneMovie(movieId);

  useEffect(() => {
    fetchedMovie.then((m) => {
      setSelectedMovie(m);
    });
  }, [fetchedMovie]);

  return (
    <Modal
      aria-describedby={undefined}
      header={<Modal.Header />}
      trigger={
        <IconButton size="s">
          <Icon20QuestionMark />
        </IconButton>
      }
    >
      {error ? (
        <Placeholder
          description={"Sorry, please try again later"}
          header={"Error"}
        />
      ) : (
        <Placeholder
          description={selectedMovie?.description}
          header={movieId}
        ></Placeholder>
      )}
    </Modal>
  );
};

export default DescrModal;
