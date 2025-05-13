"use client";
import { getCocktailSearchByName } from "@/apis/api";
import { Drinks } from "@/models/cocktailModel";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function SearchResultCards({ keyword }: { keyword: string }) {
  const { data: searchedCocktails, isError } = useSuspenseQuery({
    queryKey: ["getCocktailSearchByName", keyword],
    queryFn: () => getCocktailSearchByName(keyword),
  });

  if (isError) {
    console.error("error가 발생했습니다 ", isError);
    return (
      <Heading size="xl" margin="7%">
        에러가 발생했습니다 다시 시도해주시기 바랍니다.
      </Heading>
    );
  }

  if (!searchedCocktails?.drinks) {
    return (
      <Heading size="xl" margin="7%">
        검색 결과가 없습니다.
      </Heading>
    );
  }

  const handleClick = () => {};

  return (
    <>
      <Heading size="2xl" marginBottom="1%">
        Result Drink
      </Heading>
      <Flex gap="4" wrap="wrap" maxW="1000px" justify="center">
        {searchedCocktails.drinks.map((drink, index) => (
          <Card.Root width="320px" key={index} onClick={handleClick}>
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
