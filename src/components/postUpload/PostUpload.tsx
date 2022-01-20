import styled from "@emotion/styled";
import { COLOR } from "../../constants";

interface BtnLabel {
  btnLabel: string;
}

export const PostUpload = ({ btnLabel }: BtnLabel) => {

  return (
    <Container>
      <h2 className="sr-only">게시글 작성 페이지</h2>
      <ProfileImg src="/images/ellipse-profile.svg"/>
      <FillContainer>
        <h3 className="sr-only">게시글 작성</h3>
        <Form >
          <label>
            <Textarea placeholder="게시글 입력하기..."></Textarea>
          </label>
          <ImgLabel>
            <ImgInput
              type="file"
              id="img"
              accept="image/*"
            ></ImgInput>
          </ImgLabel>
          {btnLabel === "저장" && (
            <SaveBtn disabled>업로드</SaveBtn>
            )}
        </Form>
        <section>
          <h4 className="sr-only">업로드된 사진</h4>
          <UploadedImg></UploadedImg>
        </section>
      </FillContainer>
    </Container>
  );
};

const Container = styled.section`
  min-width: 390px;
  padding: 74px 0 20px 16px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50px;
  border: 0.5px solid #dbdbdb;
  background-size: cover;
`

const FillContainer = styled.article`
  min-width: 300px;
  width: 100%;
  padding-right: 16px;
  overflow-y: scroll;
`

const Form = styled.form`
  padding: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  border: none;
  padding: 0;
    resize: none;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const ImgLabel = styled.label`
  width: 50px;
  height: 50px;
  display: inline-block;
  background: ${COLOR.orange} url("/images/upload-file.svg") no-repeat center/60%;
  border-radius: 25px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;

const UploadedImg = styled.img `
  width: 300px;
  height: 200px;
  overflow: hidden;
  background: #dbdbdb;
  object-fit: cover;
  display: block;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  &.upload {
    display: block
  }
`

const ImgInput = styled.input`
  display: none;
`

const SaveBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 10px;
  width: 90px;
  height: 32px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${COLOR.orange};
  &:disabled {
    opacity: 0.5;
  }
`;
