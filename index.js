const readline = require('readline'); //Módulo do Node.js para leitura de entrada do usuário via terminal.
const { ContaCorrente } = require('./contaCorrente');
const { ContaPoupanca } = require('./contaPoupanca');

//Configura a interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let conta;

//Ler a opção e chama a função handleMenu.
const menu = () => {
  console.log('\nEscolha uma opção:');
  console.log('1. Criar Conta Corrente');
  console.log('2. Criar Conta Poupança');
  console.log('3. Depositar');
  console.log('4. Sacar');
  console.log('5. Ver Saldo');
  console.log('6. Aplicar Juros (Conta Corrente)');
  console.log('7. Aplicar Rendimento (Conta Poupança)');
  console.log('8. Sair');
  rl.question('\nOpção: ', handleMenu);
};

const handleMenu = (opcao) => {
  switch (opcao) {
    case '1':
      rl.question('Nome do titular: ', (titular) => {
        conta = new ContaCorrente(titular, 0);
        console.log('Conta Corrente criada com sucesso!');
        menu();
      });
      break;
    case '2':
      rl.question('Nome do titular: ', (titular) => {
        conta = new ContaPoupanca(titular, 0);
        console.log('Conta Poupança criada com sucesso!');
        menu();
      });
      break;
    case '3':
      rl.question('Valor do depósito: ', (valor) => {
        if (conta) {
          conta.depositar(parseFloat(valor));
        } else {
          console.log('Nenhuma conta criada.');
        }
        menu();
      });
      break;
    case '4':
      rl.question('Valor do saque: ', (valor) => {
        if (conta) {
          conta.sacar(parseFloat(valor));
        } else {
          console.log('Nenhuma conta criada.');
        }
        menu();
      });
      break;
    case '5':
      if (conta) {
        conta.verSaldo();
      } else {
        console.log('Nenhuma conta criada.');
      }
      menu();
      break;
    case '6':
      if (conta instanceof ContaCorrente) {//verifica se conta seria uma instancia de conta corrente
        conta.aplicarJuros();
      } else {
        console.log('Esta opção só está disponível para Conta Corrente.');
      }
      menu();
      break;
    case '7':
      if (conta instanceof ContaPoupanca) {//verifica se conta seria uma instancia de conta poupanca
        conta.aplicarRendimento();
      } else {
        console.log('Esta opção só está disponível para Conta Poupança.');
      }
      menu();
      break;
    case '8':
      rl.close();//encerra a instancia do menu
      break;
    default:
      console.log('Opção inválida.');
      menu();
  }
};

menu();
