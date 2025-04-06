import { Spinner } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

const loadingPhrases = [
  "Searching for the best movies...",
  "Fetching the latest releases...",
  "Finding your next favorite film...",
  "Loading your movie suggestions...",
  "Gathering critically acclaimed titles...",
  "Exploring hidden gems just for you...",
];

const MoviesLoader = () => {
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    let index = 0;
    setPhrase(loadingPhrases[index]);

    const interval = setInterval(() => {
      index = (index + 1) % loadingPhrases.length;
      setPhrase(loadingPhrases[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Spinner size="l" />
      <div className="text-[var(--tgui--accent_text_color)] uppercase">
        {phrase}
      </div>
    </div>
  );
};

export default MoviesLoader;
