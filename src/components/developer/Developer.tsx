import React from "react";
import styled from "@emotion/styled";

export const Developer = () => {
  const developer = [
    {
      nickname: "wjdgml3834",
      name: "김정희",
      desc: [
        "홈 화면 게시글",
        "팔로우, 팔로우 취소",
        "게시글 복수 이미지 캐러셀",
        "팔로워, 팔로잉 페이지",
      ],
    },
    {
      nickname: "choisung2",
      name: "최성이",
      desc: [""],
    },
    {
      nickname: "LEEHYUNHO2001",
      name: "이현호",
      desc: [
        "next-auth를 이용한 로그인",
        "회원가입, 프로필 미리보기",
        "감귤마켓의 유저 검색",
        "좋아요 및 좋아요 취소",
        "프로필 수정",
      ],
    },
  ];
  return (
    <div>
      <H2>Developer</H2>
      <ul>
        {developer.map((data) => {
          const { nickname, name, desc } = data;
          return (
            <ProfileList key={`developer-${name}`}>
              <ProfileLink href={`https://github.com/${nickname}`}>
                <ProfileImg
                  src={`https://avatars.githubusercontent.com/${nickname}`}
                  alt={`${name}`}
                />
                <Name>{name}</Name>
              </ProfileLink>
              <Desc>
                {desc.map((str) => (
                  <p key={`developer-${name}-${str}`}>⭐ {str}</p>
                ))}
              </Desc>
            </ProfileList>
          );
        })}
      </ul>
    </div>
  );
};

const H2 = styled.h2`
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
`;
const ProfileList = styled.li`
  display: flex;
  margin-top: 30px;
`;
const ProfileLink = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ProfileImg = styled.img`
  border-radius: 10%;
  width: 100px;
`;
const Name = styled.p`
  margin-top: 15px;
  font-weight: 700;
`;
const Desc = styled.p`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  margin-left: 30px;
  font-size: 13px;
`;
