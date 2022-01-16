import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = (e) => {
    // do sign in
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://www.technipages.com/wp-content/uploads/2020/10/fix-discord-camera-not-working.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
