import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchResults } from "../SearchResults";

const mockResults = [
  { objectID: "1", name: "Product 1", category: "Category 1" },
  { objectID: "2", name: "Product 2", category: "Category 2" },
];

describe("SearchResults", () => {
  it("renders nothing when results are empty", () => {
    const { container } = render(<SearchResults results={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders results correctly", () => {
    render(<SearchResults results={mockResults} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
  });

  it("calls onResultClick when a result is clicked", () => {
    const handleClick = vi.fn();
    render(<SearchResults results={mockResults} onResultClick={handleClick} />);

    fireEvent.click(screen.getByText("Product 1"));
    expect(handleClick).toHaveBeenCalledWith(mockResults[0]);
  });
});
