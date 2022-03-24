import { ProfileForm } from "./ProfileForm";
import styled from "@emotion/styled";
import { BackButton } from "./BackButton";

export const ProfileUpate = () => {
  return (
    <Container>
      <h2 className="sr-only"></h2>
      <Nav>
        <BackButton />
      </Nav>
      <ProfileFormContainer>
        <ProfileForm
          btnLabel="저장"
          signUp={{
            email: "",
            password: "",
          }}
        />
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
  display: flex;
  align-items: center;
  padding: 0 10px;
  .arrow {
    cursor: pointer;
  }
`;
const ProfileFormContainer = styled.div`
  margin-top: 80px;
`;
