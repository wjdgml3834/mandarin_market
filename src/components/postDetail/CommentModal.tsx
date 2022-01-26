import styled from "@emotion/styled";
interface ModalData {
  Modal: boolean,
  delModal: () => void;
}

export const CommentModal = ({
  Modal,
  delModal,
}: ModalData) => {
  return (
    <div>
      {Modal && (
        <Container>
          <li>
            <button onClick={delModal}>삭제</button>
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
