"use client";
import { getRandomCocktail } from "@/apis/api";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function RandomCocktailResultCards() {
  const { data: randomCocktail } = useSuspenseQuery({
    queryKey: ["getRandomCocktail"],
    queryFn: getRandomCocktail,
  });

  return (
    <>
      <Heading size="2xl" marginBottom="1%">
        Random Drink
      </Heading>
      <Flex gap="4" wrap="wrap" maxW="1000px" justify="center">
        {randomCocktail.drinks.map((drink) => (
          <Card.Root key={drink.idDrink} width="320px">
            <Card.Body gap="2" height="320px" width="320px">
              {drink.strDrinkThumb == null || drink.strDrink == null ? null : (
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  height="100%"
                />
              )}
            </Card.Body>
            <Card.Footer justifyContent="center">{drink.strDrink}</Card.Footer>
          </Card.Root>
        ))}
      </Flex>
    </>
  );
}
