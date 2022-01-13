import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { MyProfileInfo } from "./Info";

export const MyProfileHeader = () => {
  const [myProfileModal, setMyProfileModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const openMyProfileModal = () => {
    setMyProfileModal(true);
  };
  const closeMyProfileModal = () => {
    setMyProfileModal(false);
  };
  const openLogoutModal = () => {
    setLogoutModal(true);
  };
  const closeLogoutModal = () => {
    setLogoutModal(false);
    setMyProfileModal(false);
  };
  return (
    <section>
      <h2 className="sr-only">마이 페이지</h2>
      <Nav>
        <button>
          <ArrowBackIcon />
        </button>
        <button onClick={openMyProfileModal}>
          <MoreVertIcon />
        </button>
        {myProfileModal && <ModalBackground onClick={closeMyProfileModal} />}
        {myProfileModal && (
          <MyProfileModal>
            <li>
              <button>설정 및 개인정보</button>
            </li>
            <li>
              <button onClick={openLogoutModal}>로그아웃</button>
            </li>
          </MyProfileModal>
        )}
        {logoutModal && (
          <LogOutModal>
            <LogOutModalContainer>
              <LogoutText>로그아웃하시겠어요?</LogoutText>
              <LogOutBtnContainer>
                <div onClick={closeLogoutModal}>
                  <LogoutCancel>취소</LogoutCancel>
                </div>
                <div>
                  <Logout>로그아웃</Logout>
                </div>
              </LogOutBtnContainer>
            </LogOutModalContainer>
          </LogOutModal>
        )}
      </Nav>
      <MyProfileInfo />
      <MyProfileInfo />
      <MyProfileInfo />
      <MyProfileInfo />
      <MyProfileInfo />
      <MyProfileInfo />
    </section>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
`;
const MyProfileModal = styled.ul`
  position: absolute;
  bottom: -94.3vh;
  left: 0;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  &::before {
    display: block;
    content: "";
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background-color: #dbdbdb;
    margin: 16px auto;
  }
  button {
    width: 100vw;
    height: 46px;
    font-size: 14px;
    padding: 20px;
    text-align: start;
  }
`;
const ModalBackground = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  height: 90vh;
  background-color: #777;
  opacity: 0.3;
`;
const LogOutModal = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
`;
const LogOutModalContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoutText = styled.p`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  padding: 15px 0;
`;
const LogOutBtnContainer = styled.div`
  border-top: 0.5px solid #dbdbdb;
  width: 200px;
  display: flex;
`;
const LogoutCancel = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-left-radius: 10px;
  border-right: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

const Logout = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
`;
