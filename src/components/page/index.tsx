import React, { useEffect } from "react";
import { animated, useSpring, useTransition } from "react-spring/hooks";
import { PAGE_SLIDE_ANIMATION } from "./components";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const transitions = useTransition({
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});

const Page = ({ children }: Props) => {
  const [props, setProps] = useSpring(() => PAGE_SLIDE_ANIMATION.slideIn);
  useEffect(() => {
    console.log("1");
    return () => {
      console.log("2");
      setProps(PAGE_SLIDE_ANIMATION.slideOut);
    };
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default Page;
