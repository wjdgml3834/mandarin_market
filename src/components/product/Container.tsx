import styled from "@emotion/styled";
import { BackButton } from "../BackButton";
import { ProductRegister } from "./Register";

export const ProductContainer = () => {
  return (
    <div>
      <Nav>
        <BackButton />
      </Nav>
      <ProductRegister />
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  .arrow {
    cursor: pointer;
  }
`;
