export interface Message {
  id: string;
  creator: string;
  message: string;
  created: string;
  parentMessage?: string;
}

export interface GoogleUser {
  w3: {
    U3: string; // email
    ig: string; // full name
    ofa: string; // first name
    wea: string; // last name
  };
}
