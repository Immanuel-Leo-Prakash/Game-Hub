import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gamequery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gamequery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gamequery: { ...store.gamequery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gamequery: { ...store.gamequery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gamequery: { ...store.gamequery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gamequery: { searchText } })),
}));

export default useGameQueryStore;
