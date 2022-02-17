import styled from "@emotion/styled";
import Link from "next/link";
import { COLOR } from "../../constants/index";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const Footer = () => {
  return (
    <FooterContainer>
      <nav>
        <MenuList>
          <li>
            <Link href="/home">
              <MenuLink>
                <HomeIcon className="icon home-icon" />
                <Text>홈</Text>
              </MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/chat/list">
              <MenuLink>
                <ChatBubbleOutlineIcon className="icon chat-icon" />
                <Text>채팅</Text>
              </MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/post/upload">
              <MenuLink>
                <AddBoxOutlinedIcon className="icon" />
                <Text>게시물 작성</Text>
              </MenuLink>
            </Link>
          </li>
          <li>
            <Link href="/myprofile">
              <MenuLink>
                <PermIdentityIcon className="icon" />
                <Text>프로필</Text>
              </MenuLink>
            </Link>
          </li>
        </MenuList>
      </nav>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid #dbdbdb;
  padding: 15px 39px;
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 390px;
  background-color: #fff;
  z-index: 10;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const MenuLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #767676;
  .icon {
    width: 28px;
    height: 28px;
  }
  .chat-icon {
    width: 28px;
    height: 28px;
  }
  .home-icon {
    color: ${COLOR.orange};
  }
`;

const Text = styled.p`
  font-size: 10px;
  margin-top: 6px;
`;
