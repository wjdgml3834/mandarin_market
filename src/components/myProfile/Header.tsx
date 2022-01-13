import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { MyProfileInfo } from "./Info";

export const MyProfileHeader = () => {
  const [myProfileModal, setMyProfileModal] = useState(false);
  const openMyProfileModal = () => {
    setMyProfileModal(true);
  };
  const closeMyProfileModal = () => {
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
              <button>설정 및 개인정보</button>{" "}
            </li>
            <li>
              <button>로그아웃</button>
            </li>
          </MyProfileModal>
        )}
      </Nav>
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
