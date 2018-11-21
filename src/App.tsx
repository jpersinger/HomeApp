import React from "react";
import { Provider } from "react-redux";
import Navigation from "./pages/navigation";
import store from "./services/redux";

const App: React.SFC = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
