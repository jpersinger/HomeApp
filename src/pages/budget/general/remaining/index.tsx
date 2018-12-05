import React from "react";
import { connect } from "react-redux";
import { Headline2 } from "../../../../components/typography";
import { getRemainingForMonth } from "../../../../services/budget_services";
import { RootState } from "../../../../services/redux/reducers";
import { BudgetState } from "../../../../services/redux/reducers/budget";
import { RemainingContainer } from "./components";

const Remaining = (budget: BudgetState) => {
  return (
    <RemainingContainer>
      <Headline2>${getRemainingForMonth(budget)}</Headline2>
    </RemainingContainer>
  );
};

export default connect(({ budget }: RootState) => budget)(Remaining);
