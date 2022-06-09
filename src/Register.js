import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerFB } from "./redux/modules/user";

function Register() {
  const dispatch = useDispatch();
  const email = React.useRef();
  const pwd = React.useRef();
  const pwdConfirm = React.useRef();
  const nickname = React.useRef();

  const emailCheck = (email) => {
    let reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return reg.test(email);
  };

  const register = () => {
    if (
      email.current.value === "" ||
      pwd.current.value === "" ||
      nickname.current.value === ""
    ) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    if (!emailCheck(email.current.value)) {
      alert("이메일 형식이 맞지 않아요!");
      email.current.value = "";
      return;
    }
    if (pwd.current.value !== pwdConfirm.current.value) {
      alert("비밀번호가 일치하지 않아요!");
      pwd.current.value = "";
      pwdConfirm.current.value = "";
      return;
    }
    if (pwd.current.value.length < 6) {
      alert("비밀번호가 너무 짧아요!");
      pwd.current.value = "";
      pwdConfirm.current.value = "";
      return;
    }
    dispatch(
      registerFB(email.current.value, pwd.current.value, nickname.current.value)
    );
    alert("회원가입이 완료되었습니다!");
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Title
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Devlog
        </Title>
        <div>Blog for Developers</div>

        <InputWrap>
          <input
            placeholder="아이디 (id@example.com)"
            type="email"
            ref={email}
          ></input>
          <input placeholder="닉네임" type="text" ref={nickname}></input>
          <input
            placeholder="비밀번호 (6자리 이상)"
            type="password"
            ref={pwd}
          ></input>
          <input
            placeholder="비밀번호 확인"
            type="password"
            ref={pwdConfirm}
          ></input>
          <BtnJoin onClick={register}>가입하기</BtnJoin>
        </InputWrap>
      </Container>
    </>
  );
}

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
  cursor: pointer;
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
const BtnJoin = styled.div`
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
export default Register;
