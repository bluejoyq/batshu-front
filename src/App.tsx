import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "./presentation/common/atoms/GlobalStyles";

export const App = (): ReactElement => {
  return (
    <>
      <script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${
          import.meta.env.VITE_REST_API_KEY
        }`}
      />

      <RouterProvider router={router} />
      <CssBaseline />
      <GlobalStyles />
    </>
  );
};
