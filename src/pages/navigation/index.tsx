import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import IconButton from "../../components/icon/iconButton";
import { RootState } from "../../services/redux/reducers";
import Budget from "../budget";
import Food from "../food";
import Home from "../home";
import Login from "./authentication";
import { linkStyles, ListStyle, NavContainer } from "./components";

enum PATH_MAP {
  home = "/",
  budget = "/budget",
  food = "/food"
}

interface Props {
  isAuthenticated: boolean;
}

const Navigation = ({ isAuthenticated }: Props) => {
  const [open, toggleOpen] = useState(false);

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

      {!isAuthenticated && <Login />}
    </Router>
  );
};

export default connect(({ home: { isAuthenticated } }: RootState) => ({
  isAuthenticated
}))(Navigation);
