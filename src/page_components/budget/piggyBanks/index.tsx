import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePiggyBank } from "../../../services/redux/actions/budget";
import { RootState } from "../../../services/redux/reducers";
import { PiggyBank } from "../budget.definitions";
import { BudgetSection } from "../components";
import NewPiggyBankModal from "./newPiggyBankModal";

interface Props {
  piggyBanks: PiggyBank[];
  deletePiggyBank: (title: string) => void;
}

const PiggyBanks = ({ piggyBanks, deletePiggyBank }: Props) => {
  const [newPiggyBankModalOpen, setNewPiggyBankModalOpen] = useState(false);

  const items = piggyBanks.map(
    ({ title, amountPerMonth, currentTotal, goalTotal }) => ({
      title,
      subtext: amountPerMonth,
      goalAmount: goalTotal,
      percentComplete: !!goalTotal
        ? (currentTotal / goalTotal) * 100
        : undefined
    })
  );

  return (
    <div>
      <BudgetSection
        items={items}
        sortOnSubtext
        onAdd={() => {
          setNewPiggyBankModalOpen(true);
        }}
        buttonText="Add New Piggy Bank"
        onDelete={(index: number) => {
          const title = piggyBanks[index].title;
          deletePiggyBank(title);
        }}
      />
      {newPiggyBankModalOpen && (
        <NewPiggyBankModal
          toggleOpen={() => {
            setNewPiggyBankModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default connect(
  ({ budget: { allPiggyBanks } }: RootState) => ({
    piggyBanks: allPiggyBanks
  }),
  { deletePiggyBank }
)(PiggyBanks);
