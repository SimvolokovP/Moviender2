import { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useLikedMoviesStore from "../../store/useLikedMovies";

import LikedMovie from "../../components/LikedMovie/LikedMovie";
import { Pagination } from "@telegram-apps/telegram-ui";
import { useTranslation } from "react-i18next";

const CollectionPage = () => {
  const { likedMovies } = useLikedMoviesStore();

  const {  t} = useTranslation();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    console.log(likedMovies);
  }, []);

  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div className="page">
          {likedMovies.length ? (
            <>
              <LikedMovie
                key={likedMovies[page - 1]?.kinopoiskId}
                movie={likedMovies[page - 1]}
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
            <div className="text-[var(--tgui--accent_text_color)] uppercase">{t("likedMoviesNotFound")}</div>
          )}
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default CollectionPage;
