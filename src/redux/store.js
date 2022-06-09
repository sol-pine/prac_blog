// import { configureStore, createSlice } from "@reduxjs/toolkit";

// let users = createSlice({
//   name: "users",
//   initialState: {
//     id: "devsol@aaa.com",
//     nick: "닉네임",
//     pw: "aaa111!",
//   },
//   reducers: {
//     setUsers(users) {
//       users.push({
//         id: users.id,
//         nick: users.nick,
//         pw: users.pw,
//         url: users.url,
//       });
//       console.log(users);
//     },
//   },
// });

// let postText = createSlice({
//   name: "postText",
//   initialState: "텍스트를 입력하면 여기에 입력한 텍스트가 보여집니다!",
//   reducers: {
//     changeText(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// let postImg = createSlice({
//   name: "postImg",
//   initialState:
//     "https://mblogthumb-phinf.pstatic.net/MjAyMDA1MTJfMTY4/MDAxNTg5MjE1ODQyMDM4.YNI2hUs08n7dRnc_oLBRDh57Bd4l7bsXMqdv9jOKz5Mg.Z7QfBAm1ysUYhvOtIUFfctiuaWSrl-obPt4obPBaKCEg.JPEG.z12wow/DA3FC70F-5BC4-441C-A09B-E6D199CC9E05-4613-000001D10EB35418_file.jpg?type=w800",
//   reducers: {
//     changeImg(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export default configureStore({
//   reducer: {
//     postText: postText.reducer,
//     postImg: postImg.reducer,
//     users: users.reducer,
//   },
// });
// export let { setUsers } = users.actions;
// export let { changeText } = postText.actions;
// export let { changeImg } = postImg.actions;
