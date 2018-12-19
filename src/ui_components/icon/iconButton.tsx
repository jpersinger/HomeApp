import React from "react";
import styled from "react-emotion";
import Icon, { IconHelperProps } from ".";

interface Props extends IconHelperProps {
  onClick: () => void;
  container?: boolean;
  containerFill?: string;
  hasCircleBorder?: boolean;
}

const Container = styled("button")<{
  container: boolean;
  containerFill: string;
  size: number;
  hasCircleBorder?: boolean;
  fill?: string;
}>(({ container, containerFill, size, hasCircleBorder, fill }) => ({
  borderRadius: container ? 500 : 0,
  backgroundColor: containerFill,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: size,
  width: size,
  border: hasCircleBorder ? `1px solid ${fill}` : "none",
  padding: 0
}));

const IconButton = (props: Props) => (
  <Container
    container={props.container || false}
    containerFill={props.containerFill || "transparent"}
    size={(props.size || 24) + 5}
    onClick={props.onClick}
    hasCircleBorder={props.hasCircleBorder}
    fill={props.fill}
  >
    <Icon {...props} styleOverrides={{ display: "flex" }} />
  </Container>
);

export default IconButton;
