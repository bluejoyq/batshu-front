import { IconButton, IconButtonProps, css } from "@mui/material";
import { ReactElement } from "react";
import { ReactComponent as LocationIcon } from "@/presentation/common/icons/outlined/Location Tick.svg";
export const AccidentToggleButton = (props: IconButtonProps): ReactElement => {
  return (
    <IconButton
      css={css`
        width: 44px;
        height: 44px;
        flex-shrink: 0;
        border-radius: 44px;
        background: #121212;

        &:hover {
          background: #1e1e1e;
        }
      `}
      {...props}
    >
      <LocationIcon
        css={css`
          display: flex;
          width: 24px;
          height: 24px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          color: #fff;
        `}
      />
    </IconButton>
  );
};
