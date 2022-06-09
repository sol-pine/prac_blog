import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
const SampleCard1 = (props) => {
  const sampleImg = useSelector((state) => state.sampleImg);
  const sampleText = useSelector((state) => state.sampleText);
  const dispatch = useDispatch();

  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <span>닉네임</span>
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
            <img src="https://ac2-p2.namu.la/20210419/797ed465a9b175c17d2d4a939e75adeb3115967fb391b8affe22929ed5c616df.jpg"></img>
          </Pic>
          <Text>{props.sampleText}</Text>
        </Content>
        <Footer></Footer>
      </PostBox>
    </>
  );
};

const SampleCard2 = () => {
  // const postText = useSelector((state) => state.postText);
  // const postImg = useSelector((state) => state.postImg);
  const sampleUser = useSelector((state) => state.sampleUser);
  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <span>{sampleUser.nick}</span>
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
          <Text>무야호~~~~</Text>
          <Pic>
            <img src="https://ac2-p2.namu.la/20210419/797ed465a9b175c17d2d4a939e75adeb3115967fb391b8affe22929ed5c616df.jpg"></img>
          </Pic>
        </Content>
        <Footer></Footer>
      </PostBox>
    </>
  );
};

const SampleCard3 = () => {
  // const postText = useSelector((state) => state.postText);
  // const postImg = useSelector((state) => state.postImg);
  const sampleUser = useSelector((state) => state.sampleUser);
  return (
    <>
      <PostBox>
        <Header>
          <Name>
            <span>{sampleUser.nick}</span>
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
          <FullText>무야호~~~~</FullText>
          <FullPic>
            <img src="https://ac2-p2.namu.la/20210419/797ed465a9b175c17d2d4a939e75adeb3115967fb391b8affe22929ed5c616df.jpg"></img>
          </FullPic>
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
const SampleHeader = styled.div`
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
const FullPic = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
`;
const SampleFooter = styled.div`
  width: 100%;
  height: 50px;
  background: #ffcc4f;
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default SampleCard1;
export { SampleCard2, SampleCard3 };
