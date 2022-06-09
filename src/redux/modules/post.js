import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../shared/firebase";
import moment from "moment";
import user from "./user";

// actionTypes

const LOAD_POST = "post/LOAD";
const ADD_POST = "post/ADD";
// const EDIT_POST = "post/EDIT";
// const DELETE_POST = "post/DELETE";

const initialState = {
  post_list: [],
};

// actionCreators

export const loadPost = (post_list) => ({ type: LOAD_POST, post_list });
export const addPost = (post) => ({ type: ADD_POST, post });
// export const editPost = (post_id, post) => ({ type: EDIT_POST, post_id, post });
// export const deletePost = (post_id) => ({ type: DELETE_POST, post_id });

// middlewares
export const loadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(collection(db, "post"));
    let post_list = [];
    post_data.forEach((doc) => {
      post_list.push({ id: doc.id, ...doc.data() });
    });
    console.log(post_list);
    dispatch(loadPost(post_list));
  };
};
export const addPostFB = (post) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "post"), post);
    const _docRef = await getDoc(docRef);
    const post_data = { id: _docRef.id, ...post };
    dispatch(addPost(post_data));
  };
};

//
// reducer
export default function post(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POST: {
      return { list: action.post_list };
    }
    case ADD_POST:
      const new_post_list = [...state.post_list, action.post];
      return { list: new_post_list };

    default:
      return state;
  }
}
