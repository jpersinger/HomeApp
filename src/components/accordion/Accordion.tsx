import React, { useRef } from "react";
import styled from "react-emotion";

const AccordionContainer = styled("div")<{
  maxHeight: number | string;
  expanded: boolean;
}>(({ maxHeight, expanded }) => ({
  maxHeight,
  overflow: "hidden",
  transition: "all 1s ease",
  marginBottom: expanded ? "1em" : 0
}));

interface Props {
  expanded: boolean;
  children: React.ReactChildren;
}

const Accordion = (props: Props) => {
  const accordionReference = useRef<HTMLDivElement>(null);

  const { expanded } = props;
  const innerDom = accordionReference.current;
  const innerHeight = (innerDom && innerDom.clientHeight) || 0;
  const currentMaxHeight = expanded ? innerHeight + 16 || "none" : 0;

  console.log(innerHeight);

  return (
    <AccordionContainer maxHeight={currentMaxHeight} expanded={expanded}>
      <div ref={accordionReference}>{props.children}</div>
    </AccordionContainer>
  );
};

export default Accordion;
