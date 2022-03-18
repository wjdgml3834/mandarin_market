import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { BackButton } from "../BackButton";
import { LogOutModal } from "../profile/LogOutModal";
import { MyProfileModal } from "../profile/MyProfileModal";
import { PostComment } from "./Comment";
import { PostDetailCard } from "./DetailCard";

export const PostDetailContainer = () => {
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
      <h2 className="sr-only">상세 페이지</h2>
      <Nav>
        <BackButton />
        <button onClick={openMyProfileModal}>
          <MoreVertIcon className="more" />
        </button>
      </Nav>
      <MainCountainer>
        <PostDetailCard />
        <PostComment />
      </MainCountainer>
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
  position: sticky;
  width: 100%;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  z-index: 100;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  .arrow {
    cursor: pointer;
  }
  .more {
    cursor: pointer;
  }
`;

const MainCountainer = styled.div`
  height: calc(100vh - 108px);
  overflow-y: scroll;
`

const Background = styled.div`
  &.true {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #777;
    opacity: 0.4;
  }
`;
