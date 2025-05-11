"use client";
import { getCocktailSearchByName } from "@/apis/api";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function SearchResultCards({
  cocktailName,
}: {
  cocktailName: string;
}) {
  const { data: searchedCocktails } = useQuery({
    queryKey: ["getCocktailSearchByName", cocktailName],
    queryFn: () => getCocktailSearchByName(cocktailName),
  });

  return (
    <>
      <Heading size="2xl" marginBottom="1%">
        Result Drink
      </Heading>
      <Flex gap="4" wrap="wrap" maxW="1000px" justify="center">
        {searchedCocktails?.drinks.map((drink, index) => (
          <Card.Root width="320px" key={index}>
            <Card.Body gap="2">
              <Image
                src={
                  drink.strDrinkThumb !== null ? drink.strDrinkThumb : undefined
                }
                alt="test"
              />
            </Card.Body>
            <Card.Footer justifyContent="center">{drink.strDrink}</Card.Footer>
          </Card.Root>
        ))}
      </Flex>
    </>
  );
}
