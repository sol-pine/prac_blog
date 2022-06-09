import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";

const Left = () => {
  return (
    <>
      <PostBox>
        <PostHeader>
          <Name>
            <Nick>닉네임</Nick>
            <span></span>
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
          <Pic></Pic>
          <Text></Text>
        </Content>
        <Footer></Footer>
      </PostBox>
    </>
  );
};
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

  span {
    font-weight: bold;
  }
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
  left: 400px;
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

export default Left;
