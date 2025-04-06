import { create } from "zustand";
import { IMovie } from "../models/IMovie";

interface LikedMoviesState {
  likedMovies: IMovie[];
  addMovie: (movie: IMovie) => void;
}

const useLikedMoviesStore = create<LikedMoviesState>()((set) => ({
  likedMovies: [],

  addMovie: (movie) =>
    set((state) => ({
      likedMovies: [...state.likedMovies, movie],
    })),
}));

export default useLikedMoviesStore;
