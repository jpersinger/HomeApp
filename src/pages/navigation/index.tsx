import React, { useState } from "react";
import { GoogleLogin } from "react-google-login-component";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import IconButton from "../../components/icon/iconButton";
import { getId } from "../../services/server/home";
import Budget from "../budget";
import Food from "../food";
import Home from "../home";
import { linkStyles, ListStyle, NavContainer } from "./components";

enum PATH_MAP {
  home = "/",
  budget = "/budget",
  food = "/food"
}

const Navigation = () => {
  const [open, toggleOpen] = useState(false);
  const [blah, setBlah] = useState("");

  getId().then(id => {
    setBlah(id);
    console.log("set blah to", id);
  });

  const loginHandler = (googleUser: any) => {
    console.log("googleuser", googleUser);
  };

  return (
    <Router>
      <div>
        <IconButton
          name="list-menu"
          size={40}
          fill="000000"
          onClick={() => {
            toggleOpen(true);
          }}
        />

        {blah && (
          <GoogleLogin
            socialId={blah}
            scope="profile"
            prompt="select_account"
            fetchBasicProfile
            responseHandler={loginHandler}
            buttonText="Login with Google"
          />
        )}
        {open && (
          <NavContainer>
            <ListStyle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1em"
                }}
              >
                <IconButton
                  name="close"
                  size={30}
                  onClick={() => {
                    toggleOpen(false);
                  }}
                />
              </div>
              <li>
                <Link
                  className={linkStyles}
                  to={PATH_MAP.home}
                  onClick={() => {
                    toggleOpen(false);
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className={linkStyles}
                  to={PATH_MAP.budget}
                  onClick={() => {
                    toggleOpen(false);
                  }}
                >
                  BUDGET
                </Link>
              </li>
              <li>
                <Link
                  className={linkStyles}
                  to={PATH_MAP.food}
                  onClick={() => {
                    toggleOpen(false);
                  }}
                >
                  FOOD
                </Link>
              </li>
            </ListStyle>
          </NavContainer>
        )}

        <Route exact path={PATH_MAP.home} component={Home} />
        <Route path={PATH_MAP.budget} component={Budget} />
        <Route path={PATH_MAP.food} component={Food} />
      </div>
    </Router>
  );
};

export default Navigation;
