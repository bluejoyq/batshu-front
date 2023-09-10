import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "./presentation/common/atoms/GlobalStyles";
import Layout from "./presentation/layout/Layout";

export const App = (): ReactElement => {
  return (
    <Layout>
      <RouterProvider router={router} />
      <CssBaseline />
      <GlobalStyles />
    </Layout>
  );
};
