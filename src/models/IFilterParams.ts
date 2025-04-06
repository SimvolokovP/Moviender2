export type movieType = "ALL" | "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES";
export type orderByType = "RATING" | "YEAR" | "NUM_VOTE";

export interface IFiltersParams {
  page: number;
  genre: number | null;
  country: number | null;
  type: movieType;
  orderBy: orderByType;
}
