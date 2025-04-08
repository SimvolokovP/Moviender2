import { Spinner } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MoviesLoader = () => {
  const { t } = useTranslation();
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const loadingPhrases = t("loadingPhrases", {
      returnObjects: true,
    }) as string[];

    setPhrase(loadingPhrases[index]);

    const interval = setInterval(() => {
      index = (index + 1) % loadingPhrases.length;
      setPhrase(loadingPhrases[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, [t]);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Spinner size="l" />
      <div className="text-[var(--tgui--accent_text_color)] uppercase text-center">
        {phrase}
      </div>
    </div>
  );
};

export default MoviesLoader;
