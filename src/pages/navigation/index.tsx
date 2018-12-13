import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import { PATH_MAP } from "./constants";
import Drawer from "./drawer";

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

        <Drawer open={open} toggleOpen={toggleOpen} />

        <Route exact path={"/" + PATH_MAP.home} component={Home} />
        <Route path={"/" + PATH_MAP.budget} component={Budget} />
        <Route path={"/" + PATH_MAP.food} component={Food} />
        <Route path={"/" + PATH_MAP.settings} component={Settings} />
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
