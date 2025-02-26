import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSearch } from "../useSearch";

// Mock state que podemos manipular en los tests
const mockState = {
  query: "",
  results: [],
  isLoading: false,
};

// Mock de Zustand
vi.mock("@/store/useStore", () => ({
  useSearchStore: vi.fn().mockImplementation(() => ({
    ...mockState,
    setQuery: vi.fn((newQuery: string) => {
      mockState.query = newQuery;
    }),
    setResults: vi.fn((newResults) => {
      mockState.results = newResults;
    }),
    setIsLoading: vi.fn((loading) => {
      mockState.isLoading = loading;
    }),
  })),
}));

// Mock de Algolia
vi.mock("@/lib/algolia", () => ({
  searchIndex: {
    search: vi
      .fn()
      .mockResolvedValue({ hits: [{ objectID: "1", name: "Test Product", category: "Test" }] }),
  },
}));

describe("useSearch", () => {
  beforeEach(() => {
    // Resetear el estado antes de cada test
    mockState.query = "";
    mockState.results = [];
    mockState.isLoading = false;
  });

  it("initializes with empty state", () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current.query).toBe("");
    expect(result.current.results).toEqual([]);
    expect(result.current.isLoading).toBe(false);
  });

  it("updates query and performs search", async () => {
    const { result } = renderHook(() => useSearch());

    await act(async () => {
      result.current.setQuery("test");
      // Esperar a que el debounce se complete
      await new Promise((r) => setTimeout(r, 300));
    });

    expect(mockState.query).toBe("test");
  });
});
