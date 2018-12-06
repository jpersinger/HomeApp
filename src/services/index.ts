import moment from "moment";

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
