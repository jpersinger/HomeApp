import React from "react";
import styled from "react-emotion";
import { Paragraph1, Paragraph3 } from "../typography";

const Row = styled("div")`
  font-family: Quicksand;
  font-size: 20px;
  padding: 0.5em;
`;

interface Props {
  text: string;
  subText?: string;
  onClick?: () => void;
}

export const ListRow: React.SFC<Props> = ({ text, subText, onClick }) => (
  <Row
    onClick={() => {
      !!onClick ? onClick() : undefined;
    }}
  >
    <Paragraph1>{text}</Paragraph1>
    <Paragraph3 style={{ marginLeft: "0.5em" }}>{subText}</Paragraph3>
  </Row>
);
