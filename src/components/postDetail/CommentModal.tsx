import styled from "@emotion/styled";
import { COLOR } from "../../constants";
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

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 36px 0 14px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 100;
  &::before {
    position: absolute;
    content: "";
    top: 16px;
    left: 50%;
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background-color: #dbdbdb;
    margin-top: 3px;
    transform: translateX(-50%);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 42px;
    font-size: 14px;
    padding-left: 26px;
    line-height: 18px;
    cursor: pointer;
    &:hover {
      color: ${COLOR.orange}
    }
  }
`;
