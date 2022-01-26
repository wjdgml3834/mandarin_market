import styled from "@emotion/styled";
import { COLOR } from "../../constants";

interface closeDelModal {
  closeDelModal: () => void;
}

export const CommentDelModal = ({ closeDelModal }: closeDelModal) => {
  return (
    <Container>
      <LogOutModalContainer>
        <LogoutText>댓글을 삭제하시겠어요?</LogoutText>
        <LogOutBtnContainer>
          <div onClick={closeDelModal}>
            <LogoutCancel>취소</LogoutCancel>
          </div>
          <div>
            <Logout>삭제</Logout>
          </div>
        </LogOutBtnContainer>
      </LogOutModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const LogOutModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoutText = styled.p`
  text-align: center;
  width: 200px;
  height: 40px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  padding: 15px 0;
`;
const LogOutBtnContainer = styled.div`
  border-top: 0.5px solid #dbdbdb;
  width: 200px;
  display: flex;
`;
const LogoutCancel = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-left-radius: 10px;
  border-right: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

const Logout = styled.p`
  text-align: center;
  padding-top: 13px;
  width: 100px;
  height: 40px;
  font-size: 10px;
  border-bottom-right-radius: 10px;
  color:  ${COLOR.orange};
  background-color: #fff;
`;
