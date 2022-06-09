import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleMinus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { storage } from "./shared/firebase";
import LeftImg from "./assets/left.svg";
import RightImg from "./assets/right.svg";
import CenterImg from "./assets/center.svg";
import { useSelector, useDispatch } from "react-redux";
import { db } from "./shared/firebase";
import { collection, addDoc } from "firebase/firestore";
import { logoutFB } from "./redux/modules/user";
import { addPostFB } from "./redux/modules/post";
import moment from "moment";

function Post(props) {
  const input_ref = React.useRef(null);
  const file_ref = React.useRef(null);
  const file_link_ref = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let [content_item, setContent_item] = useState(
    "입력하면 여기에 글씨가 보여집니다!"
  );
  let [image, setImage] = useState(
    "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MTJfMTY4/MDAxNTg5MjE1ODQyMDM4.YNI2hUs08n7dRnc_oLBRDh57Bd4l7bsXMqdv9jOKz5Mg.Z7QfBAm1ysUYhvOtIUFfctiuaWSrl-obPt4obPBaKCEg.JPEG.z12wow/DA3FC70F-5BC4-441C-A09B-E6D199CC9E05-4613-000001D10EB35418_file.jpg?type=w800"
  );
  const [layout, setLayout] = React.useState("left");

  function logout() {
    dispatch(logoutFB());
  }
  const date = moment().format("YYYY-MM-DD hh:mm:ss");
  var file_url = "";
  const selectFile = async (e) => {
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    file_url = await getDownloadURL(upload_file.ref);
    file_link_ref.current = { url: file_url };
  };
  const changeButton = async () => {
    if (input_ref.current.value == "" || file_url == "") {
      alert("모든 내용을 채워주세요!");
    } else {
      setContent_item(input_ref.current.value);
      setImage(file_url);
    }
  };
  // if (input_ref.current.value == "" || file_url == "") {
  //   document.getElementById("writeBtn").disabled = true;
  // } else {
  //   document.getElementById("writeBtn").disabled = false;
  // }
  const handleLayout = (e) => {
    setLayout(e.target.value);
  };
  function uploadButton() {
    dispatch(
      addPostFB({
        user: "",
        img: file_link_ref.current,
        date: moment().format("YYYY-MM-DD hh:mm:ss"),
        content: input_ref.current.value,
        layout: layout,
      })
    );
    history.push("/home");
  }

  return (
    <>
      <BtnSignout onClick={logout}>
        <FontAwesomeIcon icon={faCircleXmark} className="fa-2xl	" />
      </BtnSignout>
      <Container>
        <Title
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          Devlog
        </Title>
        <Header>
          <WelcomMsg>원하는 레이아웃을 고르고 기록을 시작하세요!</WelcomMsg>
        </Header>
        <OptionWrap>
          <BtnOptionWrap>
            <input
              type="radio"
              value="left"
              name="option"
              onChange={handleLayout}
            />
            <embed src={LeftImg}></embed>
          </BtnOptionWrap>
          <BtnOptionWrap>
            <input
              type="radio"
              value="right"
              name="option"
              onChange={handleLayout}
            />
            <embed src={RightImg}></embed>
          </BtnOptionWrap>
          <BtnOptionWrap>
            <input
              type="radio"
              value="center"
              name="option"
              onChange={handleLayout}
            />
            <embed src={CenterImg}></embed>
          </BtnOptionWrap>
        </OptionWrap>
        <InputWrap>
          <input type="file" ref={file_ref} onChange={selectFile} />
        </InputWrap>
        <TextBox ref={input_ref} placeholder="텍스트를 입력해보세요" />
        <BtnWrap>
          <BtnPreview
            onClick={() => {
              changeButton();
            }}
          >
            미리보기
          </BtnPreview>
          <BtnPost
            onClick={() => {
              uploadButton();
            }}
          >
            기록하기
          </BtnPost>
        </BtnWrap>
        {layout === "left" ? (
          <>
            <PostBox>
              <PostHeader>
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
              </PostHeader>
              <Content>
                <Pic>
                  <img src={image}></img>
                </Pic>
                <Text>{content_item}</Text>
              </Content>
              <Footer></Footer>
            </PostBox>
          </>
        ) : layout === "right" ? (
          <>
            <PostBox>
              <PostHeader>
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
              </PostHeader>
              <Content>
                <Text>{content_item}</Text>
                <Pic>
                  <img src={image}></img>
                </Pic>
              </Content>
              <Footer></Footer>
            </PostBox>
          </>
        ) : (
          <>
            <PostBox>
              <PostHeader>
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
              </PostHeader>
              <FullContent>
                <FullText>{content_item}</FullText>
                <FullPicture>
                  <img src={image}></img>
                </FullPicture>
              </FullContent>
              <Footer></Footer>
            </PostBox>
          </>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 680px;
  margin: 150px auto;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const OptionWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  embed {
    height: 150px;
    margin: 10px;
  }
`;
const InputWrap = styled.div`
  margin: 10px;
  padding: 5px;
  border: 2px solid #eee;
  border-radius: 6px;
  display: flex;
`;
const BtnOptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox = styled.textarea`
  width: 70%;
  height: 150px;
  resize: none;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #eee;
`;
const BtnWrap = styled.div`
  display: flex;
  margin: 20px;
  button {
    margin-left: 10px;
  }
`;
const BtnPreview = styled.div`
  width: 100px;
  height: 40px;
  background: #ffcc4f;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #161616;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #ffcc4f;
  }
`;
const BtnPost = styled.button`
  width: 100px;
  height: 40px;
  background: #ffcc4f;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: #161616;
  border: none;
  cursor: pointer;
  :hover {
    background: #161616;
    color: #ffcc4f;
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
export default Post;
