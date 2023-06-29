import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./fire";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,

          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="" alt="" />

        <h1>Sign in to manasses maish HQ</h1>
        <p>manassesmaish.slack.com</p>
        <Button
          style={{
            marginTop: 50,
            textTransform: "inherit",
            backgroundColor: " #0a8d48",
            color: "white",
          }}
          onClick={signIn}
        >
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
