/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

const message = `
👛 *Welcome to BB Wallet!*

✅ Securely manage your TON assets with ease.

💳 *Send, receive, and store TON* in a user-friendly and efficient way.

🔒 _Your private keys remain with you, ensuring full control and privacy._
`;

const replyMarkup = {
  inline_keyboard: [
    [{ text: "🚀 Open Wallet", web_app: { url: WebApp.getUrl({ command: "renderApp" }) } }]
  ]
};

Api.sendMessage({
  text: message,
  parse_mode: "Markdown",
  reply_markup: replyMarkup
});

