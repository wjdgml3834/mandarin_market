import styled from "@emotion/styled";
import Link from "next/link";

interface Props {
  arr: {
    image: string;
    username: string;
    accountname: string;
  };
}

export const Card = ({ arr }: Props) => {
  return (
    <UserList>
      <UserItem>
        <Link href={`/${arr.accountname}`}>
          <UserProfile>
            <UserImg src={arr.image} alt="user 이미지" />
            <UserInfo>
              <UserName>{arr.username}</UserName>
              <UserId>{arr.accountname}</UserId>
            </UserInfo>
          </UserProfile>
        </Link>
      </UserItem>
    </UserList>
  );
};

const UserList = styled.ul`
  max-width: 390px;
  width: 100%;
  list-style: none;
  margin: 0 auto;
`;

const UserItem = styled.li`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
`;

const UserProfile = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  font-size: 10px;
  overflow: hidden;
`;

const UserInfo = styled.div`
  width: calc(100% - 118px);
  margin-left: 12px;
  height: 100%;
  align-self: flex-start;
`;
const UserName = styled.strong`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;
const UserId = styled.strong`
  color: #767676;
  font-size: 12px;
  line-height: 15px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
