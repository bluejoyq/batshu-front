import { css } from "@emotion/react";
import { TextField, TextFieldProps } from "@mui/material";
import { ReactElement } from "react";

type AppTextFieldProps = TextFieldProps;
export const AppTextField = (props: AppTextFieldProps): ReactElement => {
  return (
    <TextField
      css={css`
        background-color: white;
        border-radius: 8px;
        .MuiOutlinedInput-notchedOutline {
          border: none;
        }
        input {
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.41px;
          ::placeholder {
            color: black;
          }
        }
      `}
      {...props}
    />
  );
};
