import styled from "@emotion/styled";
import { COLOR } from "../../constants";

interface BtnLabel {
  btnLabel: string;
}

export const ProductRegister = ({ btnLabel }: BtnLabel) => {
  
  return (
    <Container>
      <h2 className="sr-only">상품 정보 입력창</h2>
      <Form>
        <SubText>이미지 등록</SubText>
        <ImgLabel>
          <ImgInput
            type="file"
            id="img"
            accept="image/*"
          ></ImgInput>
        </ImgLabel>
        <Label>
          <SubText>상품명</SubText>
          <Input
            name="product"
            type="text"
            id="product"
            placeholder="2~15자 이내여야 합니다."
          ></Input>
        </Label>
        <Label>
          <SubText>가격</SubText>
          <Input
            name="price"
            type="text"
            id="price"
            placeholder="숫자만 입력 가능합니다."
          ></Input>
        </Label>
        <Label>
          <SubText>판매 링크</SubText>
          <Input
            name="url"
            type="text"
            id="url"
            placeholder="URL을 입력해 주세요."
          ></Input>
        </Label>
        {btnLabel === "저장" && (
          <SaveBtn disabled>저장</SaveBtn>
          )}
      </Form>
    </Container>
  );
};

const Container = styled.section`
  max-width: 390px;
  margin: 0 auto;
`;

const Form = styled.form`
  padding: 100px 34px 0;
`;

const SubText = styled.span`
  margin-bottom: 10px;
  color: #767676;
  font-size: 12px;
  line-height: 15px;
`;

const ImgLabel = styled.label`
  margin: 18px auto 30px;
  position: relative;
  width: 100%;
  height: 204px;
  background: #f2f2f2;
  border: 0ch.5 solid #767676;
  display: block;
  border-radius: 10px;
  cursor: pointer;
  &::after {
    content: '';
    width: 36px;
    height: 36px;
    display: inline-block;
    background: #C4C4C4 url('/images/upload-file.svg') no-repeat center;
    border-radius: 25px;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;

const ImgInput = styled.input`
  display: none;
`

const Label = styled.label`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  font-size: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR.orange};
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;

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
