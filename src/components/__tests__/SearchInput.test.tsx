import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../SearchInput";

describe("SearchInput", () => {
  it("renders correctly", () => {
    render(<SearchInput value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(<SearchInput value="" onChange={() => {}} isLoading={true} />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("calls onChange when user types", () => {
    const handleChange = vi.fn();
    render(<SearchInput value="" onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });
});
