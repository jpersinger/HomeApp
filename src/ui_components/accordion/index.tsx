import React, { useEffect, useState } from "react";
import IconButton from "../icon/iconButton";
import theme from "../theme";
import Accordion from "./Accordion";
import { AccordionButton, Section } from "./components";

interface AccordionSectionProps {
  aboveTheFold: React.ReactNode;
  selectMode: boolean;
  children: any;
  selected: boolean;
  selectItem?: () => void;
  edit?: () => void;
  delete?: () => void;
}

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
      <Accordion expanded={expanded}>
        <div>
          <div>{props.children}</div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {!!props.edit && (
              <AccordionButton
                fill={theme.colors.primary}
                style={{
                  paddingLeft: 4
                }}
              >
                <IconButton
                  name="edit"
                  onClick={props.edit}
                  fill={theme.colors.primary}
                />
              </AccordionButton>
            )}
            {!!props.delete && (
              <AccordionButton
                fill={theme.colors.negative}
                style={{
                  paddingLeft: 2,
                  marginLeft: "1em"
                }}
              >
                <IconButton
                  name="delete"
                  onClick={props.delete}
                  fill={theme.colors.negative}
                />
              </AccordionButton>
            )}
          </div>
        </div>
      </Accordion>
    </Section>
  );
};

export default AccordionSection;
