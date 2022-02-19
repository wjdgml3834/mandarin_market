import styled from "@emotion/styled";
interface ModalData {
  myProfileModal: boolean;
  openLogoutModal: () => void;
}

export const MyProfileModal = ({
  myProfileModal,
  openLogoutModal,
}: ModalData) => {
  return (
    <div>
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
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 100;
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
