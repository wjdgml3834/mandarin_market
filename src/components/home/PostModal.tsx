import styled from "@emotion/styled";

interface ModalData {
  postModal: boolean;
  openDeleteModal: () => void;
}

export const PostModal = ({ postModal, openDeleteModal }: ModalData) => {
  return (
    <div>
      {postModal && (
        <Container>
          <li>
            <button onClick={openDeleteModal}>삭제</button>
          </li>
          <li>
            <button>수정</button>
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
  z-index: 10;
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
