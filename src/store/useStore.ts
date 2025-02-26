import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SearchResult } from "@/types/search";

interface SearchStore {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  searchHistory: string[];
  error: string | null;
  setQuery: (query: string) => void;
  setResults: (results: SearchResult[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  addToHistory: (query: string) => void;
  setError: (error: string | null) => void;
}

export const useSearchStore = create<SearchStore>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        results: [],
        isLoading: false,
        searchHistory: [],
        error: null,
        setQuery: (query) => set({ query }, false, "setQuery"),
        setResults: (results) => set({ results }, false, "setResults"),
        setIsLoading: (isLoading) => set({ isLoading }, false, "setIsLoading"),
        addToHistory: (query) =>
          set(
            (state) => ({
              searchHistory: [query, ...state.searchHistory.filter((q) => q !== query)].slice(
                0,
                10
              ),
            }),
            false,
            "addToHistory"
          ),
        setError: (error) => set({ error }, false, "setError"),
      }),
      {
        name: "search-storage",
      }
    )
  )
);
