import styled from "@emotion/styled";
import { BackButton } from "../BackButton";
import { ProductModification } from "./Modification";

interface id {
  id: string
}

export const EditContainer = ({id}: id) => {

  return (
    <Container>
      <h2 className="sr-only">상품 수정</h2>
      <Nav>
        <BackButton />
      </Nav>
      <ProductModification id={id}/>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  display: flex;
  padding: 0 10px;
  .arrow {
    cursor: pointer;
  }
`;
