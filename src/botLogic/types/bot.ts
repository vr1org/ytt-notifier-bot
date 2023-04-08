export interface Bot {
  sendMessage(chatId: number, message: string): void;
}
