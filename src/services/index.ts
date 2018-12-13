import moment from "moment";
import ServerHandler from "./server/serverHandler";

const TEST_ID = "7f1857cd-8abe-2467-17f0-b601823dad66";

export const handleAuthentication = (id: string) => {
  console.log("initializing", id);
  ServerHandler.userId = TEST_ID;
  ServerHandler.initialize();
};

export const getUniqueId = (): string => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const formatISOString = (iso: string): string =>
  moment(iso).format("MMM Do, YYYY [at] h:mm a");

export const sortByDate = (
  iso1: string,
  iso2: string,
  inDesc?: boolean
): number =>
  inDesc
    ? moment(iso1).isAfter(iso2)
      ? -1
      : 1
    : moment(iso1).isAfter(iso2)
    ? 1
    : -1;

export const timeout = (ms: number) => new Promise(res => setTimeout(res, ms));

const format = "YYYY-MM-DD";
export const areDatesOnSameDay = (iso1: string, iso2: string): boolean =>
  moment(iso1, format).isSame(moment(iso2, format));

export const isDateToday = (iso: string): boolean =>
  areDatesOnSameDay(moment().toISOString(), iso);
