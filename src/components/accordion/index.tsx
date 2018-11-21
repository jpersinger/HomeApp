import React, { useEffect, useState } from "react";
import styled from "react-emotion";
import theme from "../theme";
import Accordion from "./Accordion";

interface AccordionSectionProps {
  aboveTheFold: React.ReactNode;
  selectMode: boolean;
  children: any;
  selected: boolean;
  selectItem?: () => void;
}

const Section = styled("div")<{ selected: boolean }>(({ selected }) => ({
  borderBottom: theme.borders.listRowBorder,
  cursor: "pointer",
  backgroundColor: selected ? "lightgray" : "",
  transition: "all 400ms ease"
}));

const AccordionSection = (props: AccordionSectionProps) => {
  const [expanded, toggleExpanded] = useState(false);

  useEffect(() => {
    if (props.selectMode) {
      toggleExpanded(false);
    }
  });

  return (
    <Section
      onClick={() => {
        !props.selectMode
          ? toggleExpanded(!expanded)
          : !!props.selectItem
          ? props.selectItem()
          : null;
      }}
      selected={props.selected && props.selectMode}
    >
      {props.aboveTheFold}
      <Accordion expanded={expanded}>{props.children}</Accordion>
    </Section>
  );
};

export default AccordionSection;
