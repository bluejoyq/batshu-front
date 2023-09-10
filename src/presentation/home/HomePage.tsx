import { css } from "@emotion/react";
import { ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <div>
      <h1>Home Page</h1>
      <img
        src={"icons/Activity 1.svg"}
        css={css`
          fill: var(--Primary, #2d264b);
        `}
      />
    </div>
  );
};
