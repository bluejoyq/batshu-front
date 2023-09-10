import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { ReactElement } from "react";
export const AppTextfield = (): ReactElement => {
  return (
    <TextField
      css={css`
        border-radius: 8px;
        background: #fff;
      `}
    />
  );
};
