"use client";

import { Heading } from "@chakra-ui/react";
import { Provider } from "../components/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <header>
            <Heading size="3xl" textAlign="center" margin="2%">
              Cocktail Dictionary
            </Heading>
          </header>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
