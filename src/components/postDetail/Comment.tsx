import styled from "@emotion/styled";
import { COLOR } from "../../constants";


export const PostComment = () => {
  return (
    <Container>
      <h2 className="sr-only">댓글 목록</h2>
      <Comment></Comment>
      <CommentWrite>
        <Form>
          <Img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/bA15rm1zOffsle8EVMPD_ZHtxYU.JPG" />
          <Label>
            <Input
              name="text"
              type="text"
              id="text"
              placeholder="댓글 입력하기"
            ></Input>
          </Label>
          <Btn
            disabled
          >게시</Btn>
        </Form>
      </CommentWrite>
    </Container>
  );
};

const Container = styled.section`
  min-width: 390px;
  margin: 0 auto;
  border-top: 1px solid #dbdbdb;
`;

const Form = styled.form`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #fff;
`;

const Label = styled.label`
  width: calc(100% - 112px);
  
  color: #767676;
  margin: 0 18px;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
`

const CommentWrite = styled.section`
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #dbdbdb;
`

const Comment = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const CommentList = styled.li`
  width: 300px;
  height: 220px;
  border: 0.5px solid #dbdbdb;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  .close {
    position: absolute;
    top: 6px;
    right: 6px;
    height: 22px;
    width: 22px;
    color:#727272;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }
`

const UploadedImg = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Btn = styled.button`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: ${COLOR.orange};  
  cursor: pointer;
  &:disabled {
    color: #c4c4c4;
  }
`;
