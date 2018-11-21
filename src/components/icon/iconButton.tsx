import React from "react";
import styled from "react-emotion";
import Icon, { IconHelperProps } from ".";

interface Props extends IconHelperProps {
  onClick: () => void;
  container?: boolean;
  containerFill?: string;
}

const Container = styled("button")<{
  container: boolean;
  containerFill: string;
  size: number;
}>(({ container, containerFill, size }) => ({
  borderRadius: container ? 500 : 0,
  backgroundColor: containerFill,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: size,
  width: size,
  border: "none",
  padding: 0
}));

const IconButton = (props: Props) => (
  <Container
    container={props.container || false}
    containerFill={props.containerFill || "transparent"}
    size={(props.size || 24) + 5}
    onClick={props.onClick}
  >
    <Icon {...props} styleOverrides={{ display: "flex" }} />
  </Container>
);

export default IconButton;
