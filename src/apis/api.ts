import { Drinks } from "@/models/cocktailModel";
import { httpClient } from "@/utils/httpClient";

export async function getCocktailSearchByName(cocktailName: string) {
  return httpClient.get<Drinks>(`/search.php?s=${cocktailName}`);
}

export async function getCocktailSearchByFirstLetter(firstLetter: string) {
  return httpClient.get<Drinks>(`/search.php?f=${firstLetter}`);
}

export async function getRandomCocktail() {
  return httpClient.get<Drinks>(`/random.php`);
}
