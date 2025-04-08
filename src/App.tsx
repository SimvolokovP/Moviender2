import { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import useLikedMoviesStore from "./store/useLikedMovies";
import { isCloudStorageSupported } from "@telegram-apps/sdk-react";

function App() {
  const { loadSavedMovies } = useLikedMoviesStore();

  useEffect(() => {
    if (isCloudStorageSupported()) {
      loadSavedMovies();
    }
  }, [isCloudStorageSupported]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
