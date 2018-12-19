import React, { CSSProperties } from "react";
import styled from "react-emotion";
import { Paragraph1, Paragraph3 } from "../typography";

const Row = styled("div")`
  font-family: Quicksand;
  font-size: 20px;
  padding: 0.5em;
`;

export interface ListRowProps {
  text: string;
  subText?: string;
  onClick?: () => void;
  styleOverrides?: CSSProperties;
}

export const ListRow: React.SFC<ListRowProps> = ({
  text,
  subText,
  onClick,
  styleOverrides = {}
}) => (
  <Row
    onClick={() => {
      !!onClick ? onClick() : undefined;
    }}
    style={styleOverrides}
  >
    <Paragraph1>{text}</Paragraph1>
    <Paragraph3 style={{ marginLeft: "0.5em" }}>{subText}</Paragraph3>
  </Row>
);
