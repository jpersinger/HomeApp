import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Budget from "../../page_components/budget";
import Food from "../../page_components/food";
import { handleAuthentication } from "../../services";
import { RootState } from "../../services/redux/reducers";
import { SettingsState } from "../../services/redux/reducers/settings";
import IconButton from "../../ui_components/icon/iconButton";
import Home from "../home";
import Settings from "../settings";
import Login from "./authentication";
import { PATH_MAP } from "./constants";
import Drawer from "./drawer";

const Navigation = ({ isAuthenticated }: SettingsState) => {
  const [open, toggleOpen] = useState(false);

  handleAuthentication("");

  if (!isAuthenticated) {
    return <Login />;
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
