import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { MyProfileInfo } from "./Info";
import { LogOutModal } from "./LogOutModal";
import { MyProfileModal } from "./MyProfileModal";

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
          <ArrowBackIcon className="arrow" />
        </button>
        <button onClick={openMyProfileModal}>
          <MoreVertIcon className="more" />
        </button>
        <MyProfileModal
          myProfileModal={myProfileModal}
          openLogoutModal={openLogoutModal}
          closeMyProfileModal={closeMyProfileModal}
        />

        {logoutModal && <LogOutModal closeLogoutModal={closeLogoutModal} />}
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
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  .arrow {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .more {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
