import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CardContainer } from "./CardContainer";
import { NonFeed } from "../home/Nonfeed";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export const Main = () => {
  const [showing, setShowing] = useState(false);

  const [user, setUser] = useState<Session | null>();
  const session = async () => {
    const data = await getSession();
    return data;
  };

  useEffect(() => {
    session().then((data: Session | null) => setUser(data));
  }, []);

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
  height: calc(100vh - 120px);
  margin: 0px auto;
  overflow-y: scroll;
  padding: 20px 16px 0;
`;
