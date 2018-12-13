import axios from "axios";
import { SERVER_URL } from "./constants";

export const sendGetRequest = <T>(
  hash: string,
  cleanData?: (data: T) => T,
  data?: any
): Promise<T> =>
  new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + hash, { params: data })
      .then(data => {
        if (cleanData) {
          resolve(cleanData(data.data));
        } else {
          resolve(data.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });

export const sendPostRequest = (hash: string, data: string) => {
  console.log("sending", data);
  axios.post(SERVER_URL + hash, data, {
    headers: { "Content-Type": "application/json" }
  });
};

export const sendDeleteRequest = (hash: string, data: any) => {
  console.log("deleting", data);
  axios.delete(hash, {
    params: data
  });
};
