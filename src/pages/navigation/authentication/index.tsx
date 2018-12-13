import React, { useState } from "react";
import { css } from "react-emotion";
import { GoogleLogin } from "react-google-login-component";
import { connect } from "react-redux";
import Loading from "../../../components/animations/loading";
import Modal from "../../../components/modal";
import theme from "../../../components/theme";
import { authenticateUser } from "../../../services/redux/actions/settings";
import { getId } from "../../../services/server/home";
import { GoogleUser } from "../../../services/settings_services/settings_services.definitions";
import { LoginModalContainer } from "./components";

const loginClassName = css`
  background-color: ${theme.colors.secondary};
  font-family: Quicksand;
  color: white;
  font-size: 1.3em;
  padding: 0.5em;
`;

interface Props {
  authenticateUser: (googleUser: GoogleUser) => void;
}

const Login = ({ authenticateUser }: Props) => {
  const [clientId, setClientId] = useState("");

  getId().then(id => {
    setClientId(id);
  });

  const loginHandler = (googleUser: GoogleUser) => {
    authenticateUser(googleUser);
  };

  return (
    <Modal
      title="Login"
      close={() => {}}
      content={
        <LoginModalContainer>
          {clientId ? (
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
            <Loading
              colorOptions={[theme.colors.secondary, theme.colors.primary]}
            />
          )}
        </LoginModalContainer>
      }
    />
  );
};

export default connect(
  null,
  { authenticateUser }
)(Login);
