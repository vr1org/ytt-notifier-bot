import { Bot } from "../../src/botLogic/types";

export class TestBot implements Bot {
  public sentMessages: string[] = [];

  sendMessage(chatId: number, message: string): void {
    throw new Error("Method not implemented.");
  }  
}
