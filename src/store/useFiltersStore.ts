import { create } from "zustand";

type movieType = "ALL" | "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES";
type orderByType = "RATING" | "YEAR" | "NUM_VOTE";

interface FiltersState {
  page: number;
  genre: number | null;
  country: number | null;
  type: movieType;
  orderBy: orderByType;
  setPage: (page: number) => void;
  setGenre: (genre: number | null) => void;
  setCountry: (country: number | null) => void;
  setType: (type: movieType) => void;
  setOrderBy: (orderBy: orderByType) => void;
  reset: () => void;
}

const useFiltersStore = create<FiltersState>()((set) => ({
  page: 1,
  genre: null,
  country: null,
  type: "ALL",
  orderBy: "RATING",

  setPage: (page) => set({ page }),
  setGenre: (genre) => set({ genre }),
  setCountry: (country) => set({ country }),
  setType: (type) => set({ type }),
  setOrderBy: (orderBy) => set({ orderBy }),

  reset: () =>
    set({
      page: 1,
      genre: null,
      country: null,
      type: "ALL",
      orderBy: "RATING",
    }),
}));

export default useFiltersStore;
