"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  isLoading,
}: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-primary"
        placeholder={placeholder}
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div
            data-testid="loading-spinner"
            className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"
          />
        </div>
      )}
    </div>
  );
}
