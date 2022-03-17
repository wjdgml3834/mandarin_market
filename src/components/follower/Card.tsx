import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";
import { Follower } from "../../types/Follower";
import { COLOR } from "../../constants/index";

interface FollowerProps {
  followerData: Follower;
}

export const Card = ({ followerData }: FollowerProps) => {
  const { image, intro, username } = followerData;

  const [followBtn, setFollowBtn] = useState(false);
  const handleBtn = () => {
    setFollowBtn((current) => !current);
  };
  return (
    <UserList>
      <UserItem>
        <Link href="/profile">
          <UserProfile>
            <UserImg src={image} alt="user 이미지" />
            <UserInfo>
              <UserName>{username}</UserName>
              <UserId>{intro}</UserId>
            </UserInfo>
          </UserProfile>
        </Link>
        {followBtn ? (
          <UnfollowBtn onClick={handleBtn}>취소</UnfollowBtn>
        ) : (
          <FollowBtn onClick={handleBtn}>팔로우</FollowBtn>
        )}
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
`;

const FollowBtn = styled.button`
  position: absolute;
  right: 0;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  background-color: ${COLOR.orange};
  cursor: pointer;
`;

const UnfollowBtn = styled.button`
  position: absolute;
  right: 0;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #767676;
  font-size: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 26px;
  justify-content: center;
  cursor: pointer;
`;
