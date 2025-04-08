import React, { FC, useState } from "react";
import { IMovie } from "../../models/IMovie";
import useMovieName from "../../hooks/useMovieName";
import { Card, IconButton, Skeleton } from "@telegram-apps/telegram-ui";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

import { Icon24Chat } from "@telegram-apps/telegram-ui/dist/icons/24/chat";
import { Icon24Cancel } from "@telegram-apps/telegram-ui/dist/icons/24/cancel";
// import { popup } from "@telegram-apps/sdk-react";

interface LikedMovieProps {
  movie: IMovie | null;
}

const LikedMovie: FC<LikedMovieProps> = ({ movie }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const movieName = useMovieName(movie);

  //   const handleDelete = async () => {
  //     if (popup.open.isAvailable()) {
  //       // popup.isOpened() -> false
  //       const promise = popup.open({
  //         title: "Hello!",
  //         message: "Here is a test message.",
  //         buttons: [{ id: "my-id", type: "default", text: "Default text" }],
  //       });
  //       // popup.isOpened() -> true
  //       const buttonId = await promise;
  //       // popup.isOpened() -> false
  //     }
  //   };

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
                <InlineButtonsItem mode="bezeled" text="Share">
                  <Icon24Chat />
                </InlineButtonsItem>
              </div>
            </CardChip>
            <Skeleton visible={!isImageLoaded} withoutAnimation={false}>
              <img
                src={movie.posterUrl ? movie.posterUrl : ""}
                alt={movie.nameRu}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            </Skeleton>
            <CardCell>
              <div>
                <div>{movieName}</div>
                <div>
                  <IconButton size="m">
                    <Icon24Cancel />
                  </IconButton>
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
