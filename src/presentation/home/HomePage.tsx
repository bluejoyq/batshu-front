import { ReactElement } from "react";
import { AppTextField } from "../common/components/AppTextField";
import { InputAdornment, css } from "@mui/material";
import { ReactComponent as SearchIcon } from "@/presentation/common/icons/outlined/Search 1.svg";
export const HomePage = (): ReactElement => {
  return (
    <div
      css={css`
        background-color: gray;
        padding: 64px;
      `}
    >
      <h1>Home Page</h1>
      <AppTextField
        placeholder={"무엇을 봣슈~?"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                css={css`
                  color: var(--icon-color);
                `}
              />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
