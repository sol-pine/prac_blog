import { auth } from "../../shared/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";

// initialState
const initialState = {
  user: {},
  is_login: false,
};

// actionTypes
const SET_USER = "user/SET_USER";
const GET_USER = "user/GET_USER";
const LOGOUT = "user/LOGOUT";

// actionCreators
export const setUser = (user) => ({ type: SET_USER, user });
export const getUser = (user) => ({ type: GET_USER, user });
export const logout = (user) => ({ type: LOGOUT, user });

// middlewares
export const registerFB = (email, pwd, nickname) => {
  return function (dispatch) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: nickname,
        });
        dispatch(
          setUser({
            nickname: nickname,
            email: email,
            uid: user.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

export const loginFB = (email, pwd) => {
  return function (dispatch) {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUser({
              email: email,
              nickname: user.displayName,
              uid: user.uid,
            })
          );
          alert("로그인 성공!");
          window.location.href = "/post";
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMsg = error.message;
          alert("회원정보가 없습니다!");
          console.log(errorCode, errorMsg);
        });
    });
  };
};

export const loginCheckFB = () => {
  return function (dispatch) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            nickname: user.displayName,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  };
};

export const logoutFB = () => {
  return function (dispatch) {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logout());
        alert("굿바이!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.code, error.errorMessage);
      });
  };
};

// reducer
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      state.user = { ...action.user };
      state.is_login = true;
      return state;
    case GET_USER:
      break;
    case LOGOUT:
      state.user = {};
      state.is_login = false;
      return state;
    default:
      return state;
  }
}
