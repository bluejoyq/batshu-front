import { BottomNavigation, BottomNavigationAction, css } from "@mui/material";
import { ReactComponent as LogoIcon } from "@/presentation/common/icons/logo.svg";
import { ReactComponent as Message1Icon } from "@/presentation/common/icons/outlined/Message 1.svg";
import { ReactComponent as PenIcon } from "@/presentation/common/icons/outlined/Pen.svg";
import { ReactComponent as InstagramIcon } from "@/presentation/common/icons/outlined/Instagram.svg";
import { ReactComponent as ProfileSquareIcon } from "@/presentation/common/icons/outlined/Profile Square.svg";
export const AppBottomNavigationBar = () => {
  return (
    <BottomNavigation
      showLabels
      css={css`
        border-radius: 8px;
        background: #fff;
        box-shadow: 4px 4px 6px 0px rgba(161, 161, 161, 0.03);
      `}
      value={"채팅"}
    >
      <BottomNavigationAction
        label="홈"
        value={"홈"}
        icon={<LogoIcon />}
        css={actionStyles}
      />
      <BottomNavigationAction
        label="채팅"
        value={"채팅"}
        icon={<Message1Icon />}
        css={actionStyles}
      />
      <BottomNavigationAction
        label="글쓰기"
        icon={<PenIcon />}
        css={actionStyles}
      />
      <BottomNavigationAction
        label="커뮤니티"
        icon={<InstagramIcon />}
        css={actionStyles}
      />
      <BottomNavigationAction
        label="프로필"
        icon={<ProfileSquareIcon />}
        css={actionStyles}
      />
    </BottomNavigation>
  );
};

const actionStyles = css`
  color: #c1c1c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  svg {
    color: #c1c1c1;
  }
  &.Mui-selected {
    color: #000;
    svg {
      color: #000;
    }
  }
`;
