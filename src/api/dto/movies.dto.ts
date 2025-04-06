import { IMovie } from "../../models/IMovie";

export interface MoviesDto {
  items: IMovie[];
  total: number;
  totalPages: number;
}
