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

export interface IOneMovie {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: "FILM" | "SERIAL" | "SHORT_FILM";
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: ICountry[];
  genres: IGenre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
