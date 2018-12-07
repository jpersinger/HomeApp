import React, { CSSProperties, useState } from "react";
import styled from "react-emotion";
import Button from "../button";
import { Input } from "../inputs";
import theme from "../theme";

export const FormContainer = styled("div")<{ hasSubHeader?: boolean }>(
  ({ hasSubHeader }) => `
  min-height: 4em;
  display: grid;
  grid-template-columns: 30% 5% 65%;
  grid-template-rows: ${hasSubHeader ? "60% 40%" : "100%"};
`
);

export const headerItem: CSSProperties = {
  textAlign: "right"
};

export const FormChildrenContainer = styled("div")`
  grid-row-start: span 2;
  align-items: center;
  border-top: 1px solid ${theme.colors.gray};
  height: 100%;
  display: flex;
  padding: 1em 0 1em 0.5em;
`;

export const AddAndSave = ({
  currentValue,
  saveValue
}: {
  currentValue: string;
  saveValue: (newValue: string) => void;
}) => {
  const [newValue, setNewValue] = useState(currentValue);

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <Input
        value={newValue}
        onChange={event => {
          setNewValue(event.target.value);
        }}
      />
      {newValue && (
        <Button
          textOnly
          textColor={theme.colors.affirmative}
          fontSize="0.8em"
          onClick={() => {
            saveValue(newValue);
          }}
        >
          save
        </Button>
      )}
    </div>
  );
};
