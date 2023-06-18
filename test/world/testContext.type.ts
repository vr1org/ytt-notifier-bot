import { ConnectionPool } from "mssql";
import { BotSettings, Context } from "../../src/botLogic/types";
import { TestBot } from "./testBot";


export class TestContext implements Context {
  settings: BotSettings;
  pool: ConnectionPool;
  bot: TestBot = new TestBot();
}
