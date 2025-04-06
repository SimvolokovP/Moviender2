import axios from "axios";
import { movieType, orderByType } from "../models/IFilterParams";
import { MoviesDto } from "./dto/movies.dto";
import { IOneMovie } from "../models/IMovie";

export class MoviesService {
  static async getMovies(
    country: number | null,
    genre: number | null,
    orderBy: orderByType,
    page: number,
    type: movieType
  ): Promise<MoviesDto> {
    try {
      const response = await axios.get(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films",
        {
          params: {
            genres: genre,
            countries: country,
            order: orderBy,
            type: type,
            ratingFrom: 0,
            ratingTo: 10,
            yearFrom: 1950,
            yearTo: 2024,
            page: page,
          },
          headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw new Error("Failed to fetch movies. Please try again later.");
    }
  }

  static async getMovieById(id: number):Promise<IOneMovie> {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw new Error("Failed to fetch movies. Please try again later.");
    }
  }
}
