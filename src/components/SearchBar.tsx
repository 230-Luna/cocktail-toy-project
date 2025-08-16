"use client";
import { Input } from "@chakra-ui/react";

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: {
  value: string;
  onChange: (value: string) => void;
  onSearch: (searchKeyword: string) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trimEnd() !== "") {
      onSearch(value.trim());
    }
  };

  return (
    <Input
      placeholder="Search for a Cocktail"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      width="40%"
      margin="1%"
    />
  );
}
