import { Theme } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <Theme>{children}</Theme>;
};
