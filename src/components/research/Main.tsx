import styled from "@emotion/styled";
import { useState } from "react";
import { Card } from "./Card";

interface Props {
  researchCards: never[];
}

export const Main = ({ researchCards }: Props) => {
  return (
    <MainCont>
      {researchCards.map((arr, i) => {
        return <Card key={`search-card-${i}`} arr={arr} />;
      })}
    </MainCont>
  );
};
const MainCont = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
  overflow-y: scroll;
  padding: 20px 16px 0;
`;
