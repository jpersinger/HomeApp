import React from "react";
import styled from "react-emotion";
import Button from "../../components/button";
import theme from "../../components/theme";
import { Headline1, Paragraph1 } from "../../components/typography";
import { getPercentCompleteColor } from "./services";

export const BudgetList = styled("ul")`
  list-style: none;
`;

export const BudgetItem = styled("li")`
  margin-top: 0.5em;
  cursor: pointer;
  :hover {
    color: ${theme.colors.negative};
  }
`;

interface BudgetRowProps {
  title: string;
  subtext: number;
  percentComplete?: number;
  goalAmount?: number;
}

interface BudgetListRowsProps {
  items: BudgetRowProps[];
  onDelete: (index: number) => void;
}

const BudgetListRows = ({ items, onDelete }: BudgetListRowsProps) => (
  <BudgetList>
    {items.map(({ title, subtext, percentComplete, goalAmount }, index) => (
      <BudgetItem
        key={title + subtext}
        onClick={() => {
          onDelete(index);
        }}
      >
        <Headline1>{title}</Headline1>
        <Paragraph1 style={{ marginLeft: "0.5em" }}>${subtext}</Paragraph1>
        {!!percentComplete && !!goalAmount && (
          <span>
            <Paragraph1
              style={{
                marginLeft: "0.5em",
                color: getPercentCompleteColor(percentComplete)
              }}
            >
              {Math.round(percentComplete)}%
            </Paragraph1>{" "}
            of ${goalAmount}
          </span>
        )}
      </BudgetItem>
    ))}
  </BudgetList>
);

interface Props extends BudgetListRowsProps {
  onAdd: () => void;
  buttonText: string;
}

export const BudgetSection = ({
  items,
  onAdd,
  onDelete,
  buttonText
}: Props) => (
  <div>
    <BudgetListRows items={items} onDelete={onDelete} />
    <Button onClick={onAdd} color={theme.colors.primary}>
      {buttonText}
    </Button>
  </div>
);
