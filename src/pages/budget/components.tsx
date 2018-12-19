import { orderBy } from "lodash";
import React, { useState } from "react";
import styled from "react-emotion";
import Button from "../../ui_components/button";
import ConfirmationModal from "../../ui_components/modal/confirmationModal";
import theme from "../../ui_components/theme";
import { Headline1, Paragraph1 } from "../../ui_components/typography";
import { getPercentCompleteColor } from "./services";

export const FullBudgetContainer = styled("div")`
  > div:nth-child(n + 2) {
    border-top: 1px solid ${theme.colors.gray};
    margin-bottom: 1em;
  }
`;

export const BudgetList = styled("ul")`
  list-style: none;
`;

export const BudgetListItem = styled("li")`
  margin-top: 0.5em;
  cursor: pointer;
  :hover {
    color: ${theme.colors.negative};
  }
`;

interface BudgetItemProps {
  title: string;
  subtext: number;
  percentComplete?: number;
  goalAmount?: number;
}

const BudgetItem = ({
  title,
  subtext,
  percentComplete,
  goalAmount,
  onDelete
}: BudgetItemProps & { onDelete: () => void }) => {
  const [
    deleteConfirmationModalOpen,
    setDeleteConfirmationModalOpen
  ] = useState(false);

  return (
    <React.Fragment>
      <BudgetListItem
        onClick={() => {
          setDeleteConfirmationModalOpen(true);
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
            </Paragraph1>
            <Paragraph1> of ${goalAmount}</Paragraph1>
          </span>
        )}
      </BudgetListItem>
      {deleteConfirmationModalOpen && (
        <ConfirmationModal
          title={`Delete ${title}?`}
          content="This cannot be undone."
          confirmationText="Delete"
          cancelText="Cancel"
          confirm={() => {
            onDelete();
            setDeleteConfirmationModalOpen(false);
          }}
          close={() => {
            setDeleteConfirmationModalOpen(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

interface BudgetListRowsProps {
  items: BudgetItemProps[];
  onDelete: (index: number) => void;
  sortOnSubtext: boolean;
}

const BudgetListRows = ({
  items,
  onDelete,
  sortOnSubtext
}: BudgetListRowsProps) => (
  <BudgetList>
    {orderBy(items, item => (sortOnSubtext ? item.subtext : ""), "desc").map(
      (item, index) => (
        <BudgetItem
          key={item.title + item.subtext}
          onDelete={() => {
            onDelete(index);
          }}
          {...item}
        />
      )
    )}
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
  buttonText,
  sortOnSubtext
}: Props) => (
  <React.Fragment>
    <BudgetListRows
      items={items}
      onDelete={onDelete}
      sortOnSubtext={sortOnSubtext}
    />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={onAdd}
        color={theme.colors.primary}
        style={{ width: 300 }}
      >
        {buttonText}
      </Button>
    </div>
  </React.Fragment>
);
