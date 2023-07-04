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
        <img
          src="data:image/png;base64,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"
          alt="slack logo"
        />

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
