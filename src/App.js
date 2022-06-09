import { Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { loadPostFB } from "./redux/modules/post";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadPostFB());
  }, []);

  return (
    <div className="App">
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home" exact>
        <Main />
      </Route>
      <Route path="/post" exact>
        <Post />
      </Route>
    </div>
  );
}

export default App;
