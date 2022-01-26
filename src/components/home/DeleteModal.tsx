import styled from "@emotion/styled";
import { COLOR } from "../../constants/index";

interface CloseDeleteModal {
  closeDeleteModal: () => void;
}

export const DeleteModal = ({ closeDeleteModal }: CloseDeleteModal) => {
  return (
    <Container>
      <DeleteModalContainer>
        <DeleteText>게시글을 삭제할까요?</DeleteText>
        <DeleteBtnContainer>
          <div onClick={closeDeleteModal}>
            <DeleteCancel>취소</DeleteCancel>
          </div>
          <div>
            <Delete>삭제</Delete>
          </div>
        </DeleteBtnContainer>
      </DeleteModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const DeleteModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DeleteText = styled.p`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  padding: 15px 0;
`;
const DeleteBtnContainer = styled.div`
  border-top: 0.5px solid #dbdbdb;
  width: 200px;
  display: flex;
`;
const DeleteCancel = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-left-radius: 10px;
  border-right: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

const Delete = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  color: ${COLOR.orange};
`;
