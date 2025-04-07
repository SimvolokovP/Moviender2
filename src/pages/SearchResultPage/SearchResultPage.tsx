import useFiltersStore from "../../store/useFiltersStore";

import MoviesLoader from "../../components/MoviesLoader/MoviesLoader";
import MoviesList from "../../components/MoviesList/MoviesList";
import ResetMoviesList from "../../components/ResetMoviesList/ResetMoviesList";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import TelegramNavigation from "../../components/TelegramNavigation/TelegramNavigation";

const SearchResultPage = () => {
  const { country, genre, orderBy, page, type, setPage } = useFiltersStore();

  const { isLoading, targetMovies, totalPages, setTargetMovies } =
    useFetchMovies(country, genre, orderBy, type, page);

  return (
    <TelegramNavigation isMainPage={false}>
      <AnimatedPage>
        <div className="page">
          {isLoading ? (
            <MoviesLoader />
          ) : (
            <>
              {targetMovies.length ? (
                <MoviesList
                  movies={targetMovies}
                  setTargetMovies={setTargetMovies}
                />
              ) : (
                <ResetMoviesList
                  disabled={page >= totalPages}
                  page={page}
                  setPage={setPage}
                />
              )}
            </>
          )}
        </div>
      </AnimatedPage>
    </TelegramNavigation>
  );
};

export default SearchResultPage;
