import React, { FC, useState } from "react";
import { IMovie } from "../../models/IMovie";
import useMovieName from "../../hooks/useMovieName";
import { Button, Card, Skeleton } from "@telegram-apps/telegram-ui";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

import { Icon24Chat } from "@telegram-apps/telegram-ui/dist/icons/24/chat";
import { Icon24Cancel } from "@telegram-apps/telegram-ui/dist/icons/24/cancel";

interface LikedMovieProps {
  movie: IMovie | null;
  handleDelete: () => void;
  handleShare: () => void;
}

const LikedMovie: FC<LikedMovieProps> = ({
  movie,
  handleDelete,
  handleShare,
}) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const movieName = useMovieName(movie);

  return (
    <>
      {movie && (
        <Card style={{ width: "252px" }}>
          <React.Fragment key=".0">
            <CardChip style={{ zIndex: "10" }}>
              <div
                style={{
                  maxWidth: 60,
                }}
              >
                <Button
                  onClick={handleDelete}
                  size="m"
                  style={{ opacity: "85%" }}
                >
                  <Icon24Cancel />
                </Button>
              </div>
            </CardChip>
            <Skeleton visible={!isImageLoaded} withoutAnimation={false}>
              <div className="relative inline-block">
                <img
                  className="block w-full h-[380px]"
                  src={movie.posterUrl ? movie.posterUrl : ""}
                  alt={movie.nameRu}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
              </div>
            </Skeleton>
            <CardCell>
              <div>
                <div>{movieName}</div>
                <div>
                  <InlineButtonsItem
                    onClick={handleShare}
                    mode="bezeled"
                    text="Share"
                  >
                    <Icon24Chat />
                  </InlineButtonsItem>
                </div>
              </div>
            </CardCell>
          </React.Fragment>
        </Card>
      )}
    </>
  );
};

export default LikedMovie;
