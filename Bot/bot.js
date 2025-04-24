const { Telegraf } = require("telegraf");
const TOKEN = "8047277273:AAG3pgsTwJ9-P9hWc6f6p7p9gKSEZaveV7g";
const bot = new Telegraf(TOKEN);

// const web_link = "https://celebrated-torte-184681.netlify.app/";
const web_link = "https://telegram-webapp-gules.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
