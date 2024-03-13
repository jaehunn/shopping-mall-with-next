import React, { ComponentProps } from "react";
import { screen } from "@testing-library/react";

import { render } from "~/utils";
import Home from "./page";

describe("Home", () => {
  const renderHome = ({ ...props }: ComponentProps<typeof Home>) => {
    return render(<Home {...props} />);
  };

  test("Home Test", async () => {
    const { user } = renderHome({
      // ...
    });
  });
});
