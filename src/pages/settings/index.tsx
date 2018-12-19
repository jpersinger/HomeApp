import React from "react";
import { connect } from "react-redux";
import {
  addLinkedEmail,
  deleteLinkedEmail,
  setPushNotifications,
  updateDisplayName,
  updateTextColor
} from "../../services/redux/actions/settings";
import { RootState } from "../../services/redux/reducers";
import { UserData } from "../../services/settings_services/settings_services.definitions";
import FormBuilder from "../../ui_components/formHelper";
import {
  FormElement,
  InputFormElement
} from "../../ui_components/formHelper/form.definitions";

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
  const linkedEmails: InputFormElement[] = user.linkedEmails.map(
    (email, index) => ({
      key: `email_${index}`,
      value: email,
      placeholder: "",
      edit: () => {},
      delete:
        index === 0
          ? undefined
          : () => {
              deleteLinkedEmail(email);
            }
    })
  );

  const elements: FormElement[] = [
    {
      key: "display_name",
      header: "Display Name",
      value: user.displayName,
      edit: updateDisplayName,
      placeholder: "Display Name"
    },
    {
      key: "text_color",
      header: "Text Color",
      subHeader: "color of your name on message board",
      edit: updateTextColor,
      value: user.textColor,
      placeholder: "Text Color"
    },
    {
      key: "linked_emails",
      header: "Linked Emails",
      elements: linkedEmails,
      add: addLinkedEmail,
      addType: "input",
      onDelete: deleteLinkedEmail
    },
    {
      key: "push_notifications",
      header: "Push Notifications",
      selected: user.pushNotificationsEnabled,
      toggle: () => {
        setPushNotifications(!user.pushNotificationsEnabled);
      }
    }
  ];

  return (
    <div style={{ padding: "1em" }}>
      <FormBuilder hasInnerLines elements={elements} />
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
