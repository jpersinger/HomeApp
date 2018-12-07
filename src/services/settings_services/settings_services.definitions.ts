export interface GoogleUser {
  w3: {
    U3: string; // email
    ig: string; // full name
    ofa: string; // first name
    wea: string; // last name
  };
}

export interface UserData {
  id: string;
  email: string;
  displayName: string;
  fullName: string;
  firstName: string;
  lastName: string;
  textColor: string;
  linkedEmails: string[];
  pushNotificationsEnabled: boolean;
}
