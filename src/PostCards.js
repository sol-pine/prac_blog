import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
const PostCard1 = (props) => {
  const date = moment().format("YYYY-MM-DD hh:mm:ss");
  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <Nick>닉네임</Nick>
            <span>{date}</span>
          </Name>
          <BtnBox>
            <Btn>
              <FontAwesomeIcon icon={faPen} className="fa-lg" />
            </Btn>
            <Btn>
              <FontAwesomeIcon icon={faCircleMinus} className="fa-lg" />
            </Btn>
          </BtnBox>
        </Header>
        <Content>
          <Pic>
            <img src={props.image} />
          </Pic>
          <Text>{props.content_item}</Text>
        </Content>
        <Footer></Footer>
      </PostBox>
    </>
  );
};

const PostCard2 = (props) => {
  const date = moment().format("YYYY-MM-DD hh:mm:ss");
  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <Nick>닉네임</Nick>
            <span>{date}</span>
          </Name>
          <BtnBox>
            <Btn>
              <FontAwesomeIcon icon={faPen} className="fa-lg" />
            </Btn>
            <Btn>
              <FontAwesomeIcon icon={faCircleMinus} className="fa-lg" />
            </Btn>
          </BtnBox>
        </Header>
        <Content>
          <Text>{props.content_item}</Text>
          <Pic>
            <img src={props.image}></img>
          </Pic>
        </Content>
        <Footer></Footer>
      </PostBox>
    </>
  );
};

const PostCard3 = (props) => {
  const date = moment().format("YYYY-MM-DD hh:mm:ss");
  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <Nick>닉네임</Nick>
            <span>{date}</span>
          </Name>
          <BtnBox>
            <Btn>
              <FontAwesomeIcon icon={faPen} className="fa-lg" />
            </Btn>
            <Btn>
              <FontAwesomeIcon icon={faCircleMinus} className="fa-lg" />
            </Btn>
          </BtnBox>
        </Header>
        <FullContent>
          <FullText>{props.content_item}</FullText>
          <FullPicture>
            <img src={props.image}></img>
          </FullPicture>
        </FullContent>
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
const Header = styled.div`
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
const FullContent = styled.div`
  width: 100%;
  height: 450px;
  overflow: hidden;
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

const FullText = styled.div`
  width: 550px;
  padding: 20px;
  overflow-y: auto;
  max-height: 150px;
  text-align: center;
`;
const FullPicture = styled.div`
  width: 100%;
  max-height: 300px;
`;
const Footer = styled.div`
  width: 100%;
  height: 50px;
  background: #ffcc4f;
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default PostCard1;
export { PostCard2, PostCard3 };
