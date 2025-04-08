import { useEffect } from "react";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";
import useLikedMoviesStore from "../../store/useLikedMovies";
import { Button } from "@telegram-apps/telegram-ui";

const CollectionPage = () => {
  const { likedMovies, loadSavedMovies } = useLikedMoviesStore();

  useEffect(() => {
    console.log(likedMovies);
  }, []);

  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div>
          {likedMovies.map((m) => (
            <div
              className="text-[var(--tgui--accent_text_color)]"
              key={m.kinopoiskId}
            >
              {m.nameRu}
            </div>
          ))}
          <Button onClick={() => loadSavedMovies()}>load</Button>
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default CollectionPage;
