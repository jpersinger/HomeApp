import axios from "axios";
import { SERVER_URL } from "./constants";

export const sendPostRequest = (hash: string, data: any) => {
  axios.post(SERVER_URL + hash, JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
