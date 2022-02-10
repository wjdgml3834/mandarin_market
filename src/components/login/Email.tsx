import styled from "@emotion/styled";
import { API_ENDPOINT, COLOR } from "../../constants";
import axios from "axios";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { signIn } from "next-auth/react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const [loginError, setLoginError] = useState("");

  const onChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
      if (value.length > 0) {
        setIsEmail(true);
      } else {
        setIsEmail(false);
      }
    } else if (name === "password") {
      setPassword(value);
      if (value.length > 0) {
        setIsPassword(true);
      } else {
        setIsPassword(false);
      }
    }
  }, []);

  const router = useRouter();

  const login = async (e: any) => {
    // 원래 실행되는 이벤트 취소
    e.preventDefault();
    // Form 안에서 이메일, 패스워드 가져오기

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("email-password-credential", {
      email,
      password,
      redirect: false,
      callbackUrl: "http://localhost:3000/user",
    });
    console.log(res);
    // await router.push(response.url)
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={login}>
        <Label>
          <SubText>이메일</SubText>
          <Input
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={onChange}
          ></Input>
        </Label>
        <Label>
          <SubText>비밀번호</SubText>
          <Input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={onChange}
          ></Input>
          {loginError && <Error className="error">*{loginError}</Error>}
        </Label>
        <Button disabled={!(isEmail && isPassword)}>로그인</Button>
      </Form>
      <Link href="/signup">
        <a className="signup">이메일로 회원가입</a>
      </Link>
    </Container>
  );
};

const Container = styled.main`
  max-width: 370px;
  margin: 0 auto;
  .signup {
    display: block;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    margin-top: 20px;
    color: #767676;
  }
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
  &:disabled {
    opacity: 0.5;
  }
`;

const Error = styled.span`
  &.success {
    display: none;
  }
  &.error {
    display: block;
    color: ${COLOR.orange};
  }
`;
