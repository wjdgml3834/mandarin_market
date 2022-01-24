import styled from "@emotion/styled";
import { useState } from "react";
import { CardContainer } from "./CardContainer";
import { NonFeed } from "../home/Nonfeed";

export const Main = () => {
  const [showing, setShowing] = useState(false);
  return (
    <MainContainer>
      <h2 className="sr-only">감귤마켓 피드</h2>
      {showing ? <NonFeed /> : <CardContainer />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
  overflow-y: scroll;
  padding: 20px 16px 0;
`;
