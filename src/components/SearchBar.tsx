"use client";
import { Input } from "@chakra-ui/react";

export default function SearchBar({
  cocktailName,
  setCocktailName,
}: {
  cocktailName: string;
  setCocktailName: (value: string) => void;
}) {
  return (
    <Input
      placeholder="Search for a Cocktail"
      value={cocktailName}
      onChange={(e) => setCocktailName(e.target.value)}
      width="40%"
      margin="1%"
    />
  );
}
