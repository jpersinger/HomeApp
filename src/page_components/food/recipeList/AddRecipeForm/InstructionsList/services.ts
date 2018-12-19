import { isEmpty, some } from "lodash";

export const areAllInstructionsComplete = (instructions: string[]): boolean => {
  const empty = some(instructions, isEmpty);
  return !!instructions.length && !empty;
};
