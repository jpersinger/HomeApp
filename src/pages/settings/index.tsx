import React from "react";
import { connect } from "react-redux";
import FormHelper from "../../components/formHelper";
import {
  addLinkedEmail,
  deleteLinkedEmail,
  setPushNotifications,
  updateDisplayName,
  updateTextColor
} from "../../services/redux/actions/settings";
import { RootState } from "../../services/redux/reducers";
import { UserData } from "../../services/settings_services/settings_services.definitions";

interface Props {
  user: UserData;
  updateDisplayName: (displayName: string) => void;
  updateTextColor: (textColor: string) => void;
  addLinkedEmail: (email: string) => void;
  deleteLinkedEmail: (email: string) => void;
  setPushNotifications: (pushNotificationsEnabled: boolean) => void;
}

const Settings = ({
  user,
  updateDisplayName,
  updateTextColor,
  addLinkedEmail,
  deleteLinkedEmail,
  setPushNotifications
}: Props) => {
  return (
    <div>
      Settings
      <div>
        <FormHelper
          header="Display Name"
          values={user.displayName}
          edit={updateDisplayName}
        />
        <FormHelper
          header="Text Color"
          subHeader="color of your name on message board"
          edit={updateTextColor}
          values={user.textColor}
        />
        <FormHelper
          header="Linked Emails"
          values={user.linkedEmails}
          onDelete={deleteLinkedEmail}
          add={addLinkedEmail}
          discludeFirstFromEditingOptions
        />
        <FormHelper
          header="Push Notifications"
          values={user.pushNotificationsEnabled}
          toggle={() => {
            setPushNotifications(!user.pushNotificationsEnabled);
          }}
        />
      </div>
    </div>
  );
};

export default connect(
  ({ settings: { user } }: RootState) => ({
    user
  }),
  {
    updateDisplayName,
    updateTextColor,
    addLinkedEmail,
    deleteLinkedEmail,
    setPushNotifications
  }
)(Settings);
