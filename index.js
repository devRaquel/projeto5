const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let list = [];

const mensagem = () => {
rl.question('Insira uma propriedade CSS para obter uma lista ordenada de A-Z. Para ver a lista impressa no terminal digite a palavra "SAIR"', (answer) => {
  if (answer.toUpperCase() === 'SAIR') {
    rl.close();
  } else {
    list.push(answer);
   mensagem ();
  }
});
};

mensagem ();

rl.on('close', () => {
    console.log(list.sort((a, b) => a.localeCompare(b, undefined, {locale: 'en'})).join('\n'));
  });