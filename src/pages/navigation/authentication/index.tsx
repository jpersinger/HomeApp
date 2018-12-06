import React, { useState } from "react";
import { css } from "react-emotion";
import { GoogleLogin } from "react-google-login-component";
import Modal from "../../../components/modal";
import theme from "../../../components/theme";
import { Headline1 } from "../../../components/typography";
import { getId } from "../../../services/server/home";

const loginClassName = css`
  background-color: ${theme.colors.secondary};
  font-family: Quicksand;
  color: white;
  font-size: 1.3em;
  padding: 0.5em;
`;

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2em"
          }}
        >
          {!!clientId ? (
            <GoogleLogin
              socialId={clientId}
              className={loginClassName}
              scope="profile"
              prompt="select_account"
              fetchBasicProfile
              responseHandler={loginHandler}
              buttonText="Login with Google"
            />
          ) : (
            <Headline1>Fetching id</Headline1>
          )}
        </div>
      }
    />
  );
};

export default Login;
