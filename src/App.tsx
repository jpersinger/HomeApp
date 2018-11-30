import React from "react";
import { Provider } from "react-redux";
import Navigation from "./pages/navigation";
import { setup } from "./services/redis";
import store from "./services/redux";

const App = () => {
  // useEffect(() => {
  //   setup();
  // });
  setup();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
