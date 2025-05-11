"use client";
import { getRandomCocktail } from "@/apis/api";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function RandomCocktailResultCards() {
  const { data: randomCocktail } = useQuery({
    queryKey: ["getRandomCocktails"],
    queryFn: getRandomCocktail,
  });

  return (
    <>
      <Heading size="2xl" marginBottom="1%">
        Random Drink
      </Heading>
      <Flex gap="4" wrap="wrap" maxW="1000px" justify="center">
        {randomCocktail?.drinks.map((drink) => (
          <Card.Root key={drink.idDrink} width="320px">
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
