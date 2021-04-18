import { Client } from "discord.js";
import { config } from "dotenv";
import respondToMessage from "./src/respondToMessage";
import onReady from "./src/onReady";

config();
export const client = new Client();
client.login(process.env.BOT_TOKEN);

client.once("ready", onReady)
client.on("message", respondToMessage);
