import { useEffect } from "react";
import { MoviesService } from "../../api/moviesService";
import useFiltersStore from "../../store/useFiltersStore";

const SearchResultPage = () => {
  const { country, genre, orderBy, page, type } = useFiltersStore();

  const fetchMovies = async () => {
    const movies = await MoviesService.getMovies(
      country,
      genre,
      orderBy,
      page,
      type
    );

    console.log(movies);
    console.log(movies.total);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default SearchResultPage;
