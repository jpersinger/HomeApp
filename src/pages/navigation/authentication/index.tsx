import React, { useState } from "react";
import { GoogleLogin } from "react-google-login-component";
import Modal from "../../../components/modal";
import { getId } from "../../../services/server/home";

const Login = () => {
  const [clientId, setClientId] = useState("");

  getId().then(id => {
    setClientId(id);
  });
  // ofa
  const loginHandler = (googleUser: any) => {
    console.log("googleuser", googleUser);
  };
  return (
    <Modal
      title="Login"
      close={() => {}}
      content={
        <GoogleLogin
          socialId={clientId}
          scope="profile"
          prompt="select_account"
          fetchBasicProfile
          responseHandler={loginHandler}
          buttonText="Login with Google"
        />
      }
    />
  );
};

export default Login;
