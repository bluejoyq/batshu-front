import { ReactElement } from "react";
import { AppTextField } from "../common/components/AppTextField";
import { InputAdornment, css } from "@mui/material";
import { ReactComponent as SearchIcon } from "@/presentation/common/icons/outlined/Search 1.svg";
import { AccidentToggleButton } from "./components/AccidentToggleButton";
import { AppIconButton } from "../common/components/AppIconButton";
import { ReactComponent as Situation1Icon } from "@/presentation/common/icons/outlined/Situation 1.svg";
import { AccidentButton } from "./components/AccidentButton";
import { ReactComponent as AddIcon } from "@/presentation/common/icons/outlined/Add.svg";
import { ReactComponent as MinusIcon } from "@/presentation/common/icons/outlined/Minus.svg";
import { AppBottomNavigationBar } from "../common/components/AppBottmNaviationBar";
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
      <AccidentToggleButton />
      <AccidentButton />
      <AppIconButton size="medium">
        <Situation1Icon />
      </AppIconButton>
      <AppIconButton size="small">
        <AddIcon />
      </AppIconButton>
      <AppIconButton size="small">
        <MinusIcon />
      </AppIconButton>
      <AppBottomNavigationBar />
    </div>
  );
};
