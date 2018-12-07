import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import IconButton from "../../components/icon/iconButton";
import { getUniqueId } from "../../services";
import { RootState } from "../../services/redux/reducers";
import { SettingsState } from "../../services/redux/reducers/settings";
import ServerHandler from "../../services/server/serverHandler";
import { setUserDataInStore } from "../../services/server/settings";
import Budget from "../budget";
import Food from "../food";
import Home from "../home";
import Settings from "../settings";
import Login from "./authentication";
import { linkStyles, ListStyle, NavContainer } from "./components";

enum PATH_MAP {
  home = "/",
  budget = "/budget",
  food = "/food",
  settings = "/settings"
}

const Navigation = ({ isAuthenticated, user }: SettingsState) => {
  const [open, toggleOpen] = useState(false);

  useEffect(
    () => {
      if (isAuthenticated) {
        ServerHandler.intialize();
      }
    },
    [isAuthenticated]
  );

  if (!isAuthenticated) {
    return <Login />;
  }

  if (isAuthenticated && !user.displayName) {
    setUserDataInStore({ ...user, id: getUniqueId() });
  }

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
              <li>
                <Link
                  className={linkStyles}
                  to={PATH_MAP.settings}
                  onClick={() => {
                    toggleOpen(false);
                  }}
                >
                  SETTINGS
                </Link>
              </li>
            </ListStyle>
          </NavContainer>
        )}

        <Route exact path={PATH_MAP.home} component={Home} />
        <Route path={PATH_MAP.budget} component={Budget} />
        <Route path={PATH_MAP.food} component={Food} />
        <Route path={PATH_MAP.settings} component={Settings} />
      </div>
    </Router>
  );
};

export default connect(
  ({ settings: { isAuthenticated, user } }: RootState) => ({
    isAuthenticated,
    user
  })
)(Navigation);
