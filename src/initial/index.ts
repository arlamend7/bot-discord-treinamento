import { Message } from "discord.js";
import dizerOi from "./functions/basic";

var token = '!';
var funcoes = {
    'oi' : dizerOi
}

export default (message : Message,[funcao, ...args]: string[]) => {
    funcao = funcao.replace(token,'');
    funcoes[funcao](message,args)
};
