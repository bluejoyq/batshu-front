import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "./presentation/common/atoms/GlobalStyles";
export const App = (): ReactElement => {
  return (
    <>
      <RouterProvider router={router} />
      <CssBaseline />
      <GlobalStyles />
    </>
  );
};
