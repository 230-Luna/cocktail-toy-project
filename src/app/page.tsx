"use client";

import { VStack } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import SearchResultCards from "@/components/SearchResultCards";
import RandomCocktailResultCards from "@/components/RandomCocktailResultCards";
import { useState } from "react";

export default function Home() {
  const [cocktailName, setCocktailName] = useState("");

  return (
    <VStack>
      <SearchBar
        cocktailName={cocktailName}
        setCocktailName={setCocktailName}
      />
      <Stats />
      {cocktailName === "" ? (
        <RandomCocktailResultCards />
      ) : (
        <SearchResultCards cocktailName={cocktailName} />
      )}
    </VStack>
  );
}
