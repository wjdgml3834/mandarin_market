import styled from "@emotion/styled";

export const Main = () => {
  return <MainContainer></MainContainer>;
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  margin: 0px auto;
  padding: 20px 16px 0;
`;
