import { ProfileForm } from "./ProfileForm";
import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { COLOR } from "../constants";

export const ProfileUpate = () => {
  return (
    <Container>
      <h2 className="sr-only"></h2>
      <Nav>
        <button>
          <ArrowBackIcon className="arrow" />
        </button>
      </Nav>
      <ProfileFormContainer>
        <ProfileForm btnLabel="저장" />
      </ProfileFormContainer>
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
const ProfileFormContainer = styled.div`
  margin-top: 80px;
`;
