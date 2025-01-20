import { createServer } from "node:http";
import { createWriteStream } from "node:fs";
import { pino } from "pino";
import { createApp, createRouter, defineEventHandler, toNodeListener } from "h3";

const logStream = createWriteStream('./logs/output.log', { flags: 'w' });
const logger = pino(logStream);

const app = createApp();

const router = createRouter();
app.use(router);

const data = {
  count: 0,
};
router.get(
  "/",
  defineEventHandler((event) => {
    data.count++;
    logger.info(data)
    return data;
  }),
);


createServer(toNodeListener(app)).listen(3000);
