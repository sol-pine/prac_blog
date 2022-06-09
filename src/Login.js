import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginFB } from "./redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const emailCheck = (email) => {
    let reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return reg.test(email);
  };

  const login = () => {
    if (email === "" || pwd === "") {
      alert("모든 내용을 입력해주세요!");
      return;
    }
    if (!emailCheck(email)) {
      alert("이메일 형식이 맞지 않아요!");
      return;
    }
    dispatch(loginFB(email, pwd));
  };

  return (
    <>
      <Container>
        <Title>Devlog</Title>
        <div>Log for Developer</div>

        <InputWrap>
          <input
            placeholder="아이디 (id@example.com)"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          ></input>
          <BtnLogin id="loginBtn" onClick={login}>
            로그인
          </BtnLogin>
          <BtnJoin
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            가입하기
          </BtnJoin>
        </InputWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 480px;
  height: 300px;
  margin: 150px auto;
  padding: 100px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Paytone One", sans-serif;
  font-size: 60px;
  font-weight: bold;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  input {
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;
const BtnLogin = styled.div`
  width: 120px;
  height: 40px;
  background: #ffcc4f;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #161616;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #ffcc4f;
  }
`;
const BtnJoin = styled.div`
  width: 120px;
  height: 40px;
  background: #ffcc4f;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #161616;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #ffcc4f;
  }
`;
export default Login;
