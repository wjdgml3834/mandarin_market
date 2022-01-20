import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ProductRegister } from "./Register";

export const ProductContainer = () => {
  return (
    <div>
      <Nav>
        <button>
          <ArrowBackIcon className="arrow" />
        </button>
      </Nav>
      <ProductRegister btnLabel="저장"/>
    </div>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  display: flex;
  align-items: center;
  .arrow {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
