import styled from "@emotion/styled";
interface ModalData {
  myProfileModal: boolean;
  closeMyProfileModal: () => void;
  openLogoutModal: () => void;
}

export const MyProfileModal = ({
  myProfileModal,
  closeMyProfileModal,
  openLogoutModal,
}: ModalData) => {
  return (
    <div>
      {myProfileModal && <ModalBackground onClick={closeMyProfileModal} />}
      {myProfileModal && (
        <Container>
          <li>
            <button>설정 및 개인정보</button>
          </li>
          <li>
            <button onClick={openLogoutModal}>로그아웃</button>
          </li>
        </Container>
      )}
    </div>
  );
};

const Container = styled.ul`
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
