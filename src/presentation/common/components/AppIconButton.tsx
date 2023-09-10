import { IconButton, IconButtonProps, css } from "@mui/material";

type AppIconButtonProps = IconButtonProps;

/**
 * size = small -> 44px
 * size = medium -> 52px
 */
export const AppIconButton = (props: AppIconButtonProps) => {
  return (
    <IconButton
      css={css`
        background-color: #fff;
        &:hover {
          background-color: #f5f5f5;
        }
        svg {
          color: #525252;
          width: 24px;
          height: 24px;
        }
        .MuiIconButton-sizeSmall {
          padding: 10px;
        }
        .MuiIconButton-sizeMedium {
          padding: 14px;
        }
      `}
      {...props}
    />
  );
};
