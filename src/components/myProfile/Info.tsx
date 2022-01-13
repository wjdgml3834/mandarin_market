import styled from "@emotion/styled";
import { COLOR } from "../../constants";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import { MyProfileHeader } from "./Header";

export const MyProfileInfo = () => {
  const userData = {
    src: "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_960_720.jpg",
    followers: 1111,
    followings: 222,
    nickname: "영등포 빵주먹 이현호",
    email: "dlgusgh200240@gmail.com",
    content: "당근 마켓 유사 프로젝트 진행중..",
  };

  return (
    <Container>
      <MyProfileHeader />
      <ProfileContainer>
        <h2 className="sr-only">마이 프로필</h2>
        <ImgContainer>
          <div>
            <Followers>{userData.followers}</Followers>
            <Text>followers</Text>
          </div>
          <Img src={userData.src} alt="유저 사진" />
          <div>
            <Followings>{userData.followings}</Followings>
            <Text>followings</Text>
          </div>
        </ImgContainer>
        <Nickname>{userData.nickname}</Nickname>
        <Email>{userData.email}</Email>
        <Content>{userData.content}</Content>
        <BtnContainer>
          <IconContainer>
            <ChatBubbleOutlineIcon className="icon" />
          </IconContainer>
          <FollowBtn>팔로우</FollowBtn>
          <IconContainer>
            <ShareIcon className="icon" />
          </IconContainer>
        </BtnContainer>
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 0.5px solid #dbdbdb;
`;
const ProfileContainer = styled.article`
  text-align: center;
  padding: 30px 55px;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const Followers = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
const Followings = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #767676;
`;
const Text = styled.p`
  font-size: 10px;
  color: #767676;
`;
const Nickname = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
const Email = styled.p`
  font-size: 12px;
  color: #767676;
  margin: 6px 0 16px 0;
`;
const Content = styled.p`
  font-size: 14px;
  color: #767676;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 26px 0;
`;
const FollowBtn = styled.button`
  background-color: ${COLOR.orange};
  border: none;
  width: 120px;
  height: 34px;
  border-radius: 30px;
  margin: 0 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;
const IconContainer = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 15px;
    height: 15px;
    color: #767676;
  }
`;
