import { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useLikedMoviesStore from "../../store/useLikedMovies";

import LikedMovie from "../../components/LikedMovie/LikedMovie";
import { Pagination } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";
import { IMovie } from "../../models/IMovie";
import { popup, shareURL } from "@telegram-apps/sdk-react";
import useMovieName from "../../hooks/useMovieName";

const CollectionPage = () => {
  const [currentMovie, setCurrentMovie] = useState<IMovie | null>(null);
  const { likedMovies } = useLikedMoviesStore();

  const { t } = useTranslation();

  const [page, setPage] = useState<number>(1);

  const { removeMovie } = useLikedMoviesStore();

  const name = useMovieName(currentMovie);

  useEffect(() => {
    if (likedMovies && likedMovies.length) {
      setCurrentMovie(likedMovies[page - 1]);
    }
  }, [likedMovies, page]);

  const handleDelete = async () => {
    if (popup.open.isAvailable()) {
      const promise = popup.open({
        title: `${t("delete")}?`,
        message: t("deletedMessage"),
        buttons: [
          { id: "no", type: "close" },
          { id: "yes", type: "ok" },
        ],
      });
      const buttonId = await promise;

      if (buttonId === "yes") {
        if (currentMovie) {
          removeMovie(currentMovie);
          if (page !== 1) {
            setPage((prevPage) => prevPage - 1);
          } else {
            setPage(page);
          }
        }
      }
    }
  };

  const handleShare = () => {
    if (shareURL.isAvailable()) {
      shareURL("https://t.me/Moviender_bot", `${t("shareMessage")} ${name}`);
    }
  };

  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div className="page">
          {likedMovies.length ? (
            <>
              <LikedMovie
                handleDelete={handleDelete}
                key={currentMovie?.kinopoiskId}
                movie={currentMovie}
                handleShare={handleShare}
              />
              <div className="max-w-sm">
                <Pagination
                  siblingCount={0}
                  page={page}
                  count={likedMovies.length}
                  onChange={(_, page) => setPage(page)}
                />
              </div>
            </>
          ) : (
            <div className="text-[var(--tgui--accent_text_color)] uppercase">
              {t("likedMoviesNotFound")}
            </div>
          )}
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default CollectionPage;
