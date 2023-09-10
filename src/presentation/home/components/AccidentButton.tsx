import { IconButton, IconButtonProps, css } from "@mui/material";
import { ReactElement } from "react";
import { ReactComponent as DocumentIcon } from "@/presentation/common/icons/outlined/Document Justify Center 1.svg";
export const AccidentButton = (props: IconButtonProps): ReactElement => {
  return (
    <IconButton
      css={css`
        display: flex;
        width: 44px;
        height: 44px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 8px;
        background: #fff;
        box-shadow: 4px 4px 6px 0px rgba(75, 75, 75, 0.03);

        &.MuiTouchRipple-root span {
          border-radius: 8px;
        }
        &:hover {
          background: #f5f5f5;
        }
      `}
      {...props}
    >
      <DocumentIcon
        css={css`
          color: #444444;
        `}
      />
    </IconButton>
  );
};
