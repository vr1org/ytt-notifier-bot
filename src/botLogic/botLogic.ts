import { Context } from "./types";

export async function botLogic(chatId: number, message: string, context: Context): Promise<void> {
  context.bot.sendMessage(chatId, "received");
}
