"use client";

import { SearchInput } from "@/components/SearchInput";
import { SearchResults } from "@/components/SearchResults";
import { useSearch } from "@/hooks/useSearch";
import { SearchResult } from "@/types/search";

export default function SearchComponent() {
  const { query, setQuery, results, isLoading } = useSearch();

  const handleResultClick = (result: SearchResult) => {
    console.log("Selected result:", result);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <SearchInput
        value={query}
        onChange={setQuery}
        isLoading={isLoading}
        placeholder="Search products..."
      />
      <SearchResults results={results} onResultClick={handleResultClick} />
    </div>
  );
}
