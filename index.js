const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN Render Environment mein set karo");
}

const bot = new Telegraf(BOT_TOKEN);

const homeKeyboard = Markup.inlineKeyboard([
  [Markup.button.callback("🏪 Shop", "shop")],
  [
    Markup.button.callback("💰 Add Balance", "balance"),
    Markup.button.callback("🧾 My Orders", "orders")
  ],
  [
    Markup.button.callback("👤 My Profile", "profile"),
    Markup.button.callback("▶️ How To Use", "help")
  ],
  [
    Markup.button.callback("🔗 Referral", "referral"),
    Markup.button.callback("🎡 Daily Spin", "spin")
  ],
  [Markup.button.callback("🗣 Support", "support")],
  [
    Markup.button.callback("💼 Selling Proof", "proof"),
    Markup.button.callback("📊 Leaderboard", "leaderboard")
  ]
]);

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "Friend";

  await ctx.reply(
    🏪 — ADITYA PANEL SHOP — 🏪

Hello, ${name}!

🔑 Premium digital products, instant delivery.

🏪 Wide product catalog
⚡ Fast order processing
💳 Payment options
🎁 Referral rewards
🛡️ Admin support

Tap any button below to begin.

👤 User ID: ${ctx.from.id}
💰 Wallet Balance: ₹0,
    homeKeyboard
  );
});

bot.action("shop", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    "🛒 Apna Product Chunlo!\n\nProduct catalog abhi setup hona baaki hai."
  );
});

bot.action("balance", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    "💰 Add Balance\n\nPayment gateway agle step mein configure hoga."
  );
});

bot.action("orders", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🧾 My Orders\nAbhi koi order available nahi hai.");
});

bot.action("profile", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    👑 — YOUR PROFILE — 👑

👤 User ID: ${ctx.from.id}
Name: ${ctx.from.first_name || "Not set"}
💰 Wallet Balance: ₹0
  );
});

bot.action("help", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("Shop select karo aur screen par diye gaye instructions follow karo.");
});

bot.action("referral", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🔗 Referral system abhi setup hona baaki hai.");
});

bot.action("spin", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🎡 Daily Spin feature abhi setup hona baaki hai.");
});

bot.action("support", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("🗣 Support ke liye admin contact abhi configure nahi hua hai.");
});

bot.action("proof", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("💼 Selling Proof abhi available nahi hai.");
});

bot.action("leaderboard", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply("📊 Leaderboard abhi setup hona baaki hai.");
});

bot.catch((err) => {
  console.error("Bot error:", err.message);
});

bot.launch()
  .then(() => console.log("VETLAM PANEL SHOP started successfully"))
  .catch((err) => console.error("Bot launch error:", err.message));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
