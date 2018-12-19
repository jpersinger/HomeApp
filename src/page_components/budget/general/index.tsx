import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../services/redux/reducers";
import { GeneralBudget } from "../budget.definitions";
import AmountDisplay from "./amountDisplay";
import Remaining from "./remaining";

const GeneralBudgetDisplay = (generalBudget: GeneralBudget) => {
  const { general, julie_credit, bryan_credit } = generalBudget;
  return (
    <div>
      <Remaining />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <AmountDisplay title="Bank" amount={general.bankAmount} />
        <AmountDisplay person="Bryan" {...bryan_credit} />
        <AmountDisplay person="Julie" {...julie_credit} />
      </div>
    </div>
  );
};

export default connect(
  ({ budget: { generalBudget } }: RootState) => generalBudget
)(GeneralBudgetDisplay);
