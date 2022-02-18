import styled from "@emotion/styled";
import React from "react";
import Router from "next/router";
import { COLOR } from "../constants/index";
import Image from "next/image";
import Icon404 from "../img/icon-404.png";

export const Custom404Cont = () => {
  return (
    <Cont>
      <ContentCont>
        <h1 className="sr-only">404 에러 페이지</h1>
        <Image
          src={Icon404}
          alt="404 Error Icon"
          width="130px"
          height="130px"
        />
        <Text>페이지를 찾을 수 없습니다.</Text>
        <BackBtn type="button" onClick={() => Router.back()}>
          이전 페이지
        </BackBtn>
      </ContentCont>
    </Cont>
  );
};

const Cont = styled.main`
  height: 90vh;
  display: flex;
  position: relative;
`;

const ContentCont = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 40%;
`;

const Text = styled.p`
  font-size: 14px;
  color: #767676;
  margin-top: 32px;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: ":(";
    display: block;
    position: absolute;
    top: -1.9px;
    right: -13px;
  }
`;

const BackBtn = styled.button`
  cursor: pointer;
  border-radius: 44px;
  font-size: 14px;
  width: 120px;
  height: 44px;
  background-color: ${COLOR.orange};
  color: #ffffff;
`;
