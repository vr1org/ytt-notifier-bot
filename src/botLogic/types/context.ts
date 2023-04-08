import { Bot } from "./bot";
import { BotSettings } from "./botSettings";
import { ConnectionPool } from "mssql";

export interface Context {
  bot: Bot;
  settings: BotSettings;
  pool: ConnectionPool;
}
