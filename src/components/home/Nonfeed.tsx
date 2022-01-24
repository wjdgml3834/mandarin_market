import styled from "@emotion/styled";
import Link from "next/link";
import { COLOR } from "../../constants/index";
import Image from "next/image";
import logo from "../../img/symbol-logo.png";

export const NonFeed = () => {
  return (
    <NonFeedCont>
      <Image src={logo} width="100px" height="100px" />
      <Text>유저를 검색해 팔로우 해보세요!</Text>
      <Link href="/search">
        <SearchBtn>검색하기</SearchBtn>
      </Link>
    </NonFeedCont>
  );
};
const NonFeedCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
`;

const Text = styled.p`
  color: #767676;
  font-size: 14px;
  margin: 20px 0px 20px 0px;
`;

const SearchBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 44px;
  font-size: 14px;
  font-weight: 500;
  padding: 13px 34px;
  border-radius: 44px;
  background-color: ${COLOR.orange};
  color: #ffffff;
  cursor: pointer;
`;
