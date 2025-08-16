import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Stats() {
  return (
    <Stack direction="row" marginBottom="1%">
      <Text>🍸Total Drinks:</Text>
      <Text>🍋‍🟩Total Ingredients:</Text>
      <Text>🖼️Total Images:</Text>
    </Stack>
  );
}
