import styled from "@emotion/styled";
import { COLOR } from "../constants";

export const SignUpPage = () => {
  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <Form>
        <Label>
          <SubText>이메일</SubText>
           <Input type="email" id="email" placeholder="이메일을 주소를 입력해 주세요."></Input>
        </Label>
        <Label>
          <SubText>비밀번호</SubText>
          <Input type="password" id="password" placeholder="비밀번호를 설정해 주세요."></Input>
        </Label>
        <Button>다음</Button>
      </Form>
    </Container>
  );
};

const Container = styled.main`
  max-width: 370px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 40px;
  text-align: center;
`;

const Form = styled.form`
  padding: 0 24px;
`;

const Label = styled.label`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  color: #767676;
  font-size: 12px;
  line-height: 15px;
`;

const SubText = styled.span`
  margin-bottom: 10px;
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

const Button = styled.button`
  width: 100%;
  border: none;
  height: 44px;
  border-radius: 44px;
  color: #fff;
  background-color: ${COLOR.orange};
  opacity: 0.5;
`;