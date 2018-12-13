import { uniqueId } from "lodash";
import React from "react";
import { animated, useTrail } from "react-spring/hooks";
import { WelcomeHomeContainer } from "./components";
import MessageBoard from "./messageBoard";

const WELCOME_HOME_MESSAGE = "Welcome Home!";

const Home = () => {
  const welcomeHomeMap = [...WELCOME_HOME_MESSAGE].map(letter => ({
    key: uniqueId(),
    letter
  }));
  const welcomeHomeProps = useTrail(welcomeHomeMap.length, {
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <React.Fragment>
      <WelcomeHomeContainer>
        {welcomeHomeMap.map((item, index) => (
          <animated.span key={item.key} style={welcomeHomeProps[index]}>
            {item.letter}
          </animated.span>
        ))}
      </WelcomeHomeContainer>
      <MessageBoard />
    </React.Fragment>
  );
};

export default Home;
