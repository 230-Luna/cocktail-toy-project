"use client";

import { VStack } from "@chakra-ui/react";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import SearchResultCards from "@/components/SearchResultCards";
import RandomCocktailResultCards from "@/components/RandomCocktailResultCards";
import { Suspense, useState } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const [searchName, setSearchName] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <VStack>
      <SearchBar
        value={searchName}
        onChange={setSearchName}
        onSearch={handleSearch}
      />
      <Stats />
      <Suspense fallback={<Loading />}>
        {searchKeyword === "" ? (
          <RandomCocktailResultCards />
        ) : (
          <SearchResultCards keyword={searchKeyword} />
        )}
      </Suspense>
    </VStack>
  );
}
