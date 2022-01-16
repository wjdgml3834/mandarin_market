import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { COLOR } from "../constants";

export const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(false)
  const [emailMessage, setEmailMessage] = useState("")

  const [password, setPassword]= useState("")
  const [isPassword, setIsPassword] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState("")

  const [signUpError, setSignUpError] = useState("")

  const router = useRouter()

  const onChange = useCallback((e) => {
    const {target: {name, value}} = e
  
    if(name === "email"){
      setEmail(value)
      const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if(!emailRegex.test(value)) {
        setEmailMessage('올바르지 않은 이메일 형식입니다.')
        setIsEmail(false)
      } else {
        setIsEmail(true)
      }
    } else if(name === "password") {
      setPassword(value)
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/
      if(!passwordRegex.test(value)) {
        setPasswordMessage('비밀번호는 8자 이상 영문과 숫자의 조합이어야 합니다.')
        setIsPassword(false)
      } else {
        setIsPassword(true)
      }
    }
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    if(isEmail && isPassword) {
      console.log('회원가입')
      axios.post('/api/hello', {
        email: email,
        password: password
      })
      .then((res) => {
        if(res.status === 200) {
          router.replace("/signup/profile")
        }
      })
      .catch((err) => {
        setSignUpError(err.res.data)
        console.log(err.res)
      })
    }
  }, [email, password, router])

  
  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <Form onSubmit={onSubmit}>
        <Label>
          <SubText>이메일</SubText>
           <Input
            name="email"
            type="email"
            id="email"
            placeholder="이메일을 주소를 입력해 주세요."
            value={email}
            onChange={onChange}
          ></Input>
        {email.length > 0 && <Error className={`${isEmail ? 'success': 'error'}`}>*{emailMessage}</Error>}
        {signUpError && <Error className="error">*{signUpError}</Error>}
        </Label>
        <Label>
          <SubText>비밀번호</SubText>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="비밀번호를 설정해 주세요."
            value={password}
            onChange={onChange}
          ></Input>
          {password.length > 0 && <Error className={`${isPassword ? 'success': 'error'}`}>*{passwordMessage}</Error>}
        </Label>
        <Button
          disabled={!(isEmail && isPassword)}
        >다음</Button>
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