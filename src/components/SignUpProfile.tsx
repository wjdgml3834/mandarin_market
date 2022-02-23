import styled from "@emotion/styled";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";

interface Props {
  signUp: {
    email: string;
    password: string;
  };
}

export const SignUpProfile = ({ signUp }: Props) => {
  return (
    <Container>
      <Title>프로필 설정</Title>
      <InfoText>나중에 언제든지 변경할 수 있습니다.</InfoText>
      <ProfileForm signUp={signUp} btnLabel="감귤마켓 시작하기" />
    </Container>
  );
};

const Container = styled.section`
  max-width: 370px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 12px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 30px;
  color: #767676;
  text-align: center;
`;
