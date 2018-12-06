import { filter } from "lodash";
import { Message } from "../../../services/home_services/home_services.definitions";

export const getImmediateChildren = (
  currentMessageId: string,
  messages: Message[]
): Message[] => filter(messages, { parentMessage: currentMessageId });
