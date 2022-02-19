import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { BackButton } from "../BackButton";
import { Border } from "../Border";
import { Carousel } from "../yourProfile/Carousel";
import { MyProfileInfo } from "./Info";
import { LogOutModal } from "./LogOutModal";
import { MyProfileModal } from "./MyProfileModal";
import { ProfilePost } from "./ProfilePost";

export const MyContainer = () => {
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
        <BackButton />
        <button onClick={openMyProfileModal}>
          <MoreVertIcon className="more" />
        </button>
      </Nav>
      <MyProfileInfo />
      <Border />
      <Carousel />
      <Border />
      <ProfilePost />
      <Background
        className={`${myProfileModal}`}
        onClick={closeMyProfileModal}
      ></Background>
      <MyProfileModal
        myProfileModal={myProfileModal}
        openLogoutModal={openLogoutModal}
      />
      {logoutModal && <LogOutModal closeLogoutModal={closeLogoutModal} />}
    </section>
  );
};
const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  z-index: 100;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  .arrow {
    cursor: pointer;
  }
  .more {
    cursor: pointer;
  }
`;

const Background = styled.div`
  &.true {
    position: fixed;
    top: 72px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #777;
    opacity: 0.4;
  }
`;
