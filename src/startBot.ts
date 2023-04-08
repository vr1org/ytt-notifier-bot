import * as TeleBot from "node-telegram-bot-api";
import * as fse from "fs-extra";
import { botLogic } from "./botLogic";
import { BotSettings } from "./botLogic/types";
import * as mssql from "mssql";

export async function startBot(): Promise<void> {
  const settingsFile = fse.readFileSync("bot-settings.json", "utf-8");
  const settings: BotSettings = JSON.parse(settingsFile);
  const pool = await mssql.connect(settings.dbConnection);
  const bot = new TeleBot(settings.botToken, { polling: true });
  const context = { bot, settings, pool };
  bot.onText(/.+/, (msg) => {
    console.log("received", msg);
    botLogic(msg.chat.id, msg.text, context);
  });
}

startBot();
