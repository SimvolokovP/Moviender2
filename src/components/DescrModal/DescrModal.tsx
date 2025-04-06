import { IconButton, Modal, Placeholder } from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark";
import { FC, useEffect, useState } from "react";
import { MoviesService } from "../../api/moviesService";
import { IOneMovie } from "../../models/IMovie";

interface DescrModalProps {
  movieId: number;
}

const DescrModal: FC<DescrModalProps> = ({ movieId }) => {
  const [selectedMovie, setSelectedMovie] = useState<IOneMovie | null>(null);

  const fetchMovieDescr = async () => {
    const response = await MoviesService.getMovieById(movieId);
    console.log(response);
    setSelectedMovie(response);
  };

  useEffect(() => {
    fetchMovieDescr();
  }, []);

  return (
    <Modal
      trigger={
        <IconButton size="s">
          <Icon20QuestionMark />
        </IconButton>
      }
    >
      <Placeholder
        description={selectedMovie?.description}
        header={movieId}
      ></Placeholder>
    </Modal>
  );
};

export default DescrModal;
