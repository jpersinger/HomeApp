import redis, { ClientOpts } from "redis";
import url from "url";
import { RECIPE_NAMES } from "./constants";

let client: redis.RedisClient;

export const setup = () => {
  console.log("setting up");
  if (process.env.REDISTOGO_URL) {
    console.log("process env", process.env.REDISTOGO_URL);
    const rtg = url.parse(process.env.REDISTOGO_URL) || {};
    console.log("rtg", rtg, rtg.hostname as ClientOpts);
    client = redis.createClient(rtg.port || "", rtg.hostname as ClientOpts);
    console.log("client", client);

    const auth = rtg.auth || "";
    console.log("auth", auth);
    client.auth(auth.split(":")[1]);
    console.log("client again", client);
  } else {
    client = redis.createClient();
    console.log("new client", client);
  }

  setInterval(() => {
    sendLocalData();
    pullServerData();
  }, 60000);
};

const sendLocalData = () => {
  client.hset(RECIPE_NAMES, "oatmeal", "piece 1", redis.print);
};

const pullServerData = () => {
  client.hkeys(RECIPE_NAMES, (err, replies) => {
    console.log(replies.length, " replies:");
    replies.forEach((reply, i) => {
      console.log("        ", i, ": ", reply);
    });
  });
};
