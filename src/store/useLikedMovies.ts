import { create } from "zustand";
import { IMovie } from "../models/IMovie";
import {
  cloudStorage,
  getCloudStorageItem,
  setCloudStorageItem,
} from "@telegram-apps/sdk-react";

interface LikedMoviesState {
  likedMovies: IMovie[];
  addMovie: (movie: IMovie) => Promise<void>;
  loadSavedMovies: () => Promise<void>;
  setLikedMovies: (movies: IMovie[]) => Promise<void>;
}

const useLikedMoviesStore = create<LikedMoviesState>()((set) => ({
  likedMovies: [],

  loadSavedMovies: async () => {
    const gettedList = await getCloudStorageItem("likedMovies");
    console.log(gettedList);
    if (gettedList) {
      set({ likedMovies: JSON.parse(gettedList) });
    }
  },

  addMovie: async (movie) => {
    console.log(movie);
    await set((state) => {
      const updatedMovies = [...state.likedMovies, movie];
      console.log("Updated Movies: ", updatedMovies);

      if (cloudStorage.setItem.isAvailable()) {
        cloudStorage.setItem("likedMovies", JSON.stringify(updatedMovies));
        console.log("Saved.. " + JSON.stringify(updatedMovies));
      }

      return { likedMovies: updatedMovies };
    });
  },
  setLikedMovies: async (movies: IMovie[]) => {
    await setCloudStorageItem("likedMovies", JSON.stringify(movies));
    set({ likedMovies: movies });
  },
}));

export default useLikedMoviesStore;
