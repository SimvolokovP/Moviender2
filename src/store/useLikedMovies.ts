import { create } from "zustand";
import { IMovie } from "../models/IMovie";
import { cloudStorage } from "@telegram-apps/sdk-react";

interface LikedMoviesState {
  likedMovies: IMovie[];
  addMovie: (movie: IMovie) => Promise<void>;
  loadSavedMovies: () => Promise<void>;
}

const useLikedMoviesStore = create<LikedMoviesState>()((set) => ({
  likedMovies: [],

  loadSavedMovies: async () => {
    if (await cloudStorage.getItem.isAvailable()) {
      const savedMovies = await cloudStorage.getItem("savedMovies");
      console.log(savedMovies);
      if (savedMovies) {
        set({ likedMovies: JSON.parse(savedMovies) });
      }
    }
  },

  addMovie: async (movie) => {
    const updatedMovies = await set((state) => ({
      likedMovies: [...state.likedMovies, movie],
    }));

    if (await cloudStorage.setItem.isAvailable()) {
      await cloudStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
      console.log("saved.." + JSON.stringify(updatedMovies));
    }
  },
}));

export default useLikedMoviesStore;
