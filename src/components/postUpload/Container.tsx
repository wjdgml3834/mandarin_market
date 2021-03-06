import styled from "@emotion/styled";
import { BackButton } from "../BackButton";
import { PostUpload } from "./PostUpload";

export const UploadContainer = () => {

  return (
    <Container>
      <h2 className="sr-only"></h2>
      <Nav>
        <BackButton />
      </Nav>
      <PostUpload />
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
