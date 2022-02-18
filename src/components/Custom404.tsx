import styled from "@emotion/styled";
import React from "react";
import Router from "next/router";
import Image from "next/image";
import Icon404 from "../img/icon-404.png";

export const Custom404Cont = () => {
  return (
    <main>
      <Image src={Icon404} alt="404 Error Icon" width="150px" height="150px" />
      <p>페이지를 찾을 수 없습니다 :(</p>
      <button onClick={() => Router.back()}>이전 페이지</button>
    </main>
  );
};
