import styled from "@emotion/styled";
import Link from "next/link";
import { COLOR } from "../../constants";

export const LoginMain = () => {

  return (
    <Container>
        <h2 className="sr-only">로그인 페이지</h2>
        <Img src="http://146.56.183.55:3000/src/assets/symbol-logo-W.png" alt="logo" />
        <LoginContainer>
          <Button color="#f2c94c" name="http://146.56.183.55:3000/src/assets/message-circle.png">카카오 계정으로 로그인</Button>
          <Button color="#767676" name="http://146.56.183.55:3000/src/assets/google.png">구글 계정으로 로그인</Button>
          <Button color="#2d9cdb" name="http://146.56.183.55:3000/src/assets/facebook.png">페이스북 계정으로 로그인</Button>
          <LinkContainer>
            <li className="login"><Link href="/login">이메일로 로그인</Link></li>
            <li><Link href="/signup">회원가입</Link></li>
          </LinkContainer>
        </LoginContainer>
    </Container>
  );
};

const Container = styled.section`
  background-color: ${COLOR.orange};
  height: 90vh;
  padding-top: 180px;
`;

const Img = styled.img`
  width: 144px;
  height: 144px;
  display: block;
  margin: 0 auto;
`;

const LoginContainer = styled.article`
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  padding: 50px 0 82px;
  border-radius: 20px 20px 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #767676;
`;

const Button = styled.button`
  border-radius: 44px;
  border: 1px solid ${props => props.color};
  background-color: #fff;
  color: #767676;
  margin-bottom: 10px;
  height: 44px;
  width: 322px;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    background: url('${props => props.name}');
    top: 9px;
    left: 17px;
    width: 24px;
    height: 24px;
    background-size: 24px;
  }
`

const LinkContainer = styled.ul`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
  .login {
    position: relative;
  }
  .login::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 12px;
    border-right: 1px solid #c4c4c4;
    display: inline-block;
    top: 2px;
    left: 89px;
  }
`;