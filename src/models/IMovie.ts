import { movieType } from "./IFilterParams";

export interface IGenre {
  id: number;
  genre: string;
}

export interface ICountry {
  id: number;
  country: string;
}

export interface IMovie {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string;
  nameEn: string | null;
  nameOriginal: string | null;
  countries: ICountry[] | null;
  genres: IGenre[] | null;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  year: number | null;
  type: movieType;
  posterUrl: string | null;
  posterUrlPreview: string | null;
}
