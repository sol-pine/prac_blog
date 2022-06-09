import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import PostCard1, { PostCard2, PostCard3 } from "./PostCards";
import { useHistory } from "react-router-dom";

function Layout(props) {
  return (
    <>
      {props.layout === "left" ? (
        <PostCard1 />
      ) : props.layout === "right" ? (
        <PostCard2 />
      ) : (
        <PostCard3 />
      )}
    </>
  );
}

export default Layout;
