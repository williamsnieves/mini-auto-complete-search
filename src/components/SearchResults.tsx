"use client";

import { SearchResult } from "@/types/search";

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick?: (result: SearchResult) => void;
}

export function SearchResults({ results, onResultClick }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="mt-4 divide-y rounded-lg shadow-lg bg-white">
      {results.map((result) => (
        <div
          key={result.objectID}
          onClick={() => onResultClick?.(result)}
          className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <h3 className="font-medium text-gray-900">{result.name}</h3>
          <p className="text-sm text-gray-600">{result.category}</p>
        </div>
      ))}
    </div>
  );
}
