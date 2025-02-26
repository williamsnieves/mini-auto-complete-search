export interface SearchResult {
  objectID: string;
  name: string;
  category: string;
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
}
