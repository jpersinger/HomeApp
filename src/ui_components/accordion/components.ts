import styled from "react-emotion";
import theme from "../theme";

export const Section = styled("div")<{ selected: boolean }>(({ selected }) => ({
  borderBottom: theme.borders.listRowBorder,
  cursor: "pointer",
  backgroundColor: selected ? "lightgray" : "",
  transition: "all 400ms ease"
}));

export const AccordionButton = styled("div")<{ fill: string }>(
  ({ fill }) => `
  border-radius: 50px;
  border: 1px solid ${fill};
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`
);
