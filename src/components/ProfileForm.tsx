import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { COLOR } from "../constants";

interface BtnLabel {
  btnLabel: string;
}

export const ProfileForm = ({ btnLabel }: BtnLabel) => {
  const [name, setName] = useState("");
  const [myId, setMyId] = useState("");
  const [intro, setIntro] = useState("");

  const [isName, setIsName] = useState(false);
  const [isMyId, setIsMyId] = useState(false);
  const [isIntro, setIsIntro] = useState(false);

  const [nameMessage, setNameMessage] = useState("");
  const [myIdMessage, setMyIdMessage] = useState("");

  const onChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
      if (value.length < 2 || value.length > 10) {
        setNameMessage("2자~10자 이내여야 합니다.");
        setIsName(false);
      } else {
        setIsName(true);
      }
    } else if (name === "id") {
      setMyId(value);
      const idRegex = /^[a-z0-9_,]{1,10}$/;
      if (!idRegex.test(value)) {
        setMyIdMessage("영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.");
        setIsMyId(false);
      } else {
        setIsMyId(true);
      }
    } else if (name === "intro") {
      setIntro(value);
      setIsIntro(true);
    }
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <Form onSubmit={onSubmit}>
      <ImgLabel>
        <ImgInput type="file" id="img" accept="image/*"></ImgInput>
      </ImgLabel>
      <Label>
        <SubText>사용자 이름</SubText>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="2~10자 이내여야 합니다."
          value={name}
          onChange={onChange}
        ></Input>
        {name.length > 0 && (
          <Error className={`${isName ? "" : "error"}`}>*{nameMessage}</Error>
        )}
      </Label>
      <Label>
        <SubText>계정 ID</SubText>
        <Input
          type="text"
          id="id"
          name="id"
          placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          value={myId}
          onChange={onChange}
        ></Input>
        {myId.length > 0 && (
          <Error className={`${isMyId ? "" : "error"}`}>*{myIdMessage}</Error>
        )}
      </Label>
      <Label>
        <SubText>소개</SubText>
        <Input
          type="text"
          id="intro"
          name="intro"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요."
          value={intro}
          onChange={onChange}
        ></Input>
      </Label>
      {btnLabel === "감귤마켓 시작하기" && (
        <Button disabled={!(isName && isMyId && isIntro)}>{btnLabel}</Button>
      )}
      {btnLabel === "저장" && (
        <SaveBtn disabled={!(isName && isMyId && isIntro)}>저장</SaveBtn>
      )}
    </Form>
  );
};

const Form = styled.form`
  padding: 0 24px;
`;

const ImgLabel = styled.label`
  margin: 0 auto 30px;
  position: relative;
  width: 110px;
  height: 110px;
  background: url("/images/ellipse-profile.svg");
  display: block;
  border-radius: 60px;
  cursor: pointer;
  &::after {
    content: "";
    width: 36px;
    height: 36px;
    display: inline-block;
    background: ${COLOR.orange} url("/images/upload-file.svg") no-repeat center;
    border-radius: 25px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const ImgInput = styled.input`
  display: none;
`;

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

const Error = styled.span`
  display: none;
  &.error {
    color: ${COLOR.orange};
    display: block;
  }
`;
const SaveBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 90px;
  height: 32px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${COLOR.orange};
  &:disabled {
    opacity: 0.5;
  }
`;
