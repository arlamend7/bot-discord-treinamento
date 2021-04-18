import { Message } from "discord.js";
import initial from "./initial";
var funcao: (message: Message, args: string[]) => void;
var TokenContexto = {
  "!": initial,
};
var tokens = Object.keys(TokenContexto);
export default (message: Message) => {
  var [usedToken] = tokens.filter((x) => message.content.startsWith(x));
  if (usedToken) {
    funcao = TokenContexto[usedToken];
    funcao(message, getComands(message));
  }
};

function getComands(message: Message) {
  return message.content.split(" ").map((x) => x.toLowerCase());
}
