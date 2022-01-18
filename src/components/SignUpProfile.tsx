import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { COLOR } from "../constants";

export const SignUpProfile = () => {

  return (
    <Container>
      <Title>프로필 설정</Title> 
      <InfoText>나중에 언제든지 변경할 수 있습니다.</InfoText>
      <Form>
        <ImgLabel>
          <ImgInput
            type="file"
            id="img"
            accept="image/*"
          ></ImgInput>
        </ImgLabel>
        <Label>
          <SubText>사용자 이름</SubText>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="2~10자 이내여야 합니다."
          ></Input>
        </Label>
        <Label>
          <SubText>계정 ID</SubText>
          <Input
            type="text"
            id="id"
            name="id"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          ></Input>
        </Label>
        <Label>
          <SubText>소개</SubText>
          <Input
            type="text"
            id="intro"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          ></Input>
        </Label>
        <Button>감귤마켓 시작하기</Button>
      </Form>
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
  margin-bottom: 30px;  color: #767676;
  text-align: center;
`;

const Form = styled.form`
  padding: 0 24px;
`;

const ImgLabel = styled.label`
  margin: 0 auto 30px;
  position: relative;
  width: 110px;
  height: 110px;
  background: url('/images/ellipse-profile.svg');
  display: block;
  border-radius: 60px;
  cursor: pointer;
  &::after {
    content: '';
    width: 36px;
    height: 36px;
    display: inline-block;
    background: ${COLOR.orange} url('/images/upload-file.svg') no-repeat center;
    border-radius: 25px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const ImgInput = styled.input`
  display: none;
`

const Label = styled.label`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  color: #767676;
  font-size: 12px;
  line-height: 15px;
  
`;

const SubText = styled.span`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  font-size: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR.orange};
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  height: 44px;
  border-radius: 44px;
  color: #fff;
  background-color: ${COLOR.orange};
  &:disabled {
    opacity: 0.5;
  }
`; 

