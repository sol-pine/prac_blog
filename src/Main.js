import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleMinus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { logoutFB } from "./redux/modules/user";
const Main = (props) => {
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state.post.list);
  console.log(postlist);
  function logout() {
    dispatch(logoutFB());
  }
  return (
    <>
      <BtnSignout onClick={logout}>
        <FontAwesomeIcon icon={faCircleXmark} className="fa-2xl	" />
      </BtnSignout>
      <Container>
        <Title
          onClick={() => {
            window.location.href = "/post";
          }}
        >
          Devlog
        </Title>

        {postlist &&
          postlist.map((list, index) => {
            return (
              <PostBox index={index} id={list.id}>
                <PostHeader>
                  <Name>
                    <Nick>닉네임</Nick>
                    <span>{list.date}</span>
                  </Name>
                  <BtnBox>
                    <Btn>
                      <FontAwesomeIcon icon={faPen} className="fa-lg" />
                    </Btn>
                    <Btn>
                      <FontAwesomeIcon icon={faCircleMinus} className="fa-lg" />
                    </Btn>
                  </BtnBox>
                </PostHeader>
                <Content>
                  <Pic>
                    <img src={list.img.url}></img>
                  </Pic>
                  <Text>{list.content}</Text>
                </Content>
                <Footer></Footer>
              </PostBox>
            );
          })}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 680px;
  margin: 150px auto;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Paytone One", sans-serif;
  font-size: 60px;
  font-weight: bold;
  padding-top: 30px;
  cursor: pointer;
  :hover {
    color: #ffcc4f;
  }
`;
const BtnSignout = styled.div`
  position: relative;
  top: 210px;
  left: 280px;
  cursor: pointer;
  :hover {
    color: #ffcc4f;
  }
`;
const Header = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;
const WelcomMsg = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  span {
    font-weight: bold;
  }
`;
const PostBox = styled.div`
  width: 90%;
  margin: 10px auto;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background: #fff;
`;
const PostHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #ffcc4f;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  text-align: left;
  position: relative;
  margin-left: 30px;
  display: flex;

  span {
    margin-left: 10px;
  }
`;
const Nick = styled.div`
  font-weight: bold;
`;
const BtnBox = styled.div`
  position: relative;
  left: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Btn = styled.div`
  cursor: pointer;
`;
const Content = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pic = styled.div`
  width: 60%;
  max-width: 60%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
const Text = styled.div`
  width: 40%;
  min-width: 40%;
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
  padding: 30px;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  background: #ffcc4f;
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default Main;
