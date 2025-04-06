import { useEffect, useState } from "react";
import { MoviesService } from "../../api/moviesService";
import useFiltersStore from "../../store/useFiltersStore";
import { IMovie } from "../../models/IMovie";
import { useNavigate } from "react-router-dom";

const SearchResultPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [targetMovies, setTargetMovies] = useState<IMovie[]>([]);
  const [total, setTotal] = useState<number>(0);

  const navigate = useNavigate();

  const { country, genre, orderBy, page, type } = useFiltersStore();

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await MoviesService.getMovies(
        country,
        genre,
        orderBy,
        page,
        type
      );

      setTargetMovies(response.items);
      setTotal(response.total);

      console.log(response);
      console.log(response.total);
    } catch (error: any) {
      console.warn(error);
      setError(error);
      navigate("/error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default SearchResultPage;
