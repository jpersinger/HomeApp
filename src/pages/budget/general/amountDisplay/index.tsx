import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import IconButton from "../../../../components/icon/iconButton";
import { Input } from "../../../../components/inputs";
import theme from "../../../../components/theme";
import { Headline1, Paragraph1 } from "../../../../components/typography";
import {
  updateCreditCard,
  updateGeneralBankBudget
} from "../../../../services/redux/actions/budget";
import { AmountContainer, CreditContainer } from "./components";
import { getNumberColor } from "./services";

interface Props {
  amount: number;
  title?: string;
  person?: "Julie" | "Bryan";
  updateGeneralBankBudget: (amount: number) => void;
  updateCreditCard: (person: "Julie" | "Bryan", amount: number) => void;
}

const AmountDisplay = ({
  amount,
  title,
  person,
  updateGeneralBankBudget,
  updateCreditCard
}: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedAmount, setUpdatedAmount] = useState(amount);

  useEffect(
    () => {
      if (!updatedAmount && !!amount) {
        setUpdatedAmount(amount);
      }
    },
    [amount]
  );

  return (
    <CreditContainer>
      <Headline1 style={{ paddingBottom: "0.5em" }}>
        {title || person}
      </Headline1>
      {!editMode && (
        <AmountContainer>
          <Paragraph1
            onClick={() => {
              setEditMode(true);
            }}
            style={{ color: getNumberColor(!person, amount) }}
          >
            ${amount}
          </Paragraph1>
        </AmountContainer>
      )}
      {editMode && (
        <AmountContainer>
          <div style={{ width: 50 }}>
            <Input
              type="number"
              step="0.01"
              value={updatedAmount}
              onChange={event => {
                setUpdatedAmount(event.target.value as any);
              }}
              height="1.2em"
            />
          </div>
          <IconButton
            onClick={() => {
              setEditMode(false);
              if (amount !== updatedAmount) {
                if (!!person) {
                  updateCreditCard(person, updatedAmount || 0);
                } else {
                  updateGeneralBankBudget(updatedAmount);
                }
              }
            }}
            name="check"
            fill={theme.colors.affirmative}
            hasCircleBorder
            container
            size={16}
          />
        </AmountContainer>
      )}
    </CreditContainer>
  );
};

export default connect(
  null,
  { updateGeneralBankBudget, updateCreditCard }
)(AmountDisplay);
