import { some } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isDateToday } from "../../services";
import { PersonalGoal } from "../../services/personal_goals_services/personal_goals_services.definitions";
import {
  setPersonalGoalArchived,
  setPersonalGoalCompleted
} from "../../services/redux/actions/personalGoals";
import { RootState } from "../../services/redux/reducers";
import AddButton from "../../ui_components/addButton";
import CheckboxRow from "../../ui_components/checkboxRow";
import Icon from "../../ui_components/icon";
import theme from "../../ui_components/theme";
import AddGoalModal from "./AddGoalModal";
import { CircleContainer, DateCircleList } from "./components";
import {
  getAllPersonalGoalsForDate,
  getPercentGoalsComplete
} from "./services";

interface Props {
  allPersonalGoals: PersonalGoal[];
  setPersonalGoalCompleted: (id: string) => void;
  setPersonalGoalArchived: (id: string, archived: boolean) => void;
}

const PersonalGoals = ({
  allPersonalGoals,
  setPersonalGoalCompleted,
  setPersonalGoalArchived
}: Props) => {
  const [addGoalModalOpen, setAddGoalModalOpen] = useState(false);
  const [currentGoals, setCurrentGoals] = useState(
    getAllPersonalGoalsForDate(moment(), allPersonalGoals)
  );
  const [selectedDate, setSelectedDate] = useState(moment());

  const percentComplete = getPercentGoalsComplete(allPersonalGoals);
  // TODO fix text

  useEffect(
    () => {
      setCurrentGoals(
        getAllPersonalGoalsForDate(selectedDate, allPersonalGoals)
      );
    },
    [allPersonalGoals, selectedDate]
  );

  return (
    <React.Fragment>
      <DateCircleList
        start={moment().subtract(1, "month")}
        end={moment()}
        selectDate={date => {
          setSelectedDate(date);
        }}
      />
      <CircleContainer>
        <Icon
          name="circle"
          text={<div>{Math.floor(percentComplete)}%</div>}
          size={200}
          percentComplete={percentComplete}
          fill={theme.colors.affirmative}
        />
      </CircleContainer>
      {currentGoals.map(goal => (
        <CheckboxRow
          key={goal.id}
          selected={some(goal.daysCompleted, day => isDateToday(day))}
          onClick={() => {
            setPersonalGoalCompleted(goal.id);
          }}
          text={goal.description}
          styleOverrides={{ borderBottom: theme.borders.listRowBorder }}
          disabled={!!goal.archiveDate}
          extraTextButtons={
            goal.archiveDate
              ? [
                  {
                    text: "Restore",
                    onClick: () => {
                      setPersonalGoalArchived(goal.id, false);
                    }
                  }
                ]
              : [
                  {
                    text: "Archive",
                    onClick: () => {
                      setPersonalGoalArchived(goal.id, true);
                    }
                  }
                ]
          }
        />
      ))}
      <AddButton
        onClick={() => {
          setAddGoalModalOpen(true);
        }}
      />
      {addGoalModalOpen && (
        <AddGoalModal
          close={() => {
            setAddGoalModalOpen(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default connect(
  ({ personalGoals: { allPersonalGoals } }: RootState) => ({
    allPersonalGoals
  }),
  { setPersonalGoalCompleted, setPersonalGoalArchived }
)(PersonalGoals);
