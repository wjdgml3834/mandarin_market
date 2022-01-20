import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PostUpload } from "./PostUpload";

export const UploadContainer = () => {

  return (
    <Container>
      <h2 className="sr-only"></h2>
      <Nav>
        <button>
          <ArrowBackIcon className="arrow" />
        </button>
      </Nav>
      <PostUpload btnLabel="저장" />
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
  .arrow {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
