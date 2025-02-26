"use client";

import { useEffect, useState } from "react";
import { useSearchStore } from "@/store/useStore";
import { searchIndex } from "@/lib/algolia";
import { SearchResult } from "@/types/search";

export function useSearch() {
  const { query, setQuery, results, setResults, isLoading, setIsLoading } = useSearchStore();
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const performSearch = async () => {
      if (debouncedQuery.length === 0) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const { hits } = await searchIndex.search<SearchResult>(debouncedQuery);
        setResults(hits);
      } catch (error) {
        console.error("Error searching:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery, setResults, setIsLoading]);

  return {
    query,
    setQuery,
    results,
    isLoading,
  };
}
