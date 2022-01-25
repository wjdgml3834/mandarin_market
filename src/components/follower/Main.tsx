import styled from "@emotion/styled";
import { CardContainer } from "./CardContainer";

export const Main = () => {
  return (
    <MainContainer>
      <CardContainer />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
  padding: 20px 16px 0;
  overflow-y: scroll;
`;
