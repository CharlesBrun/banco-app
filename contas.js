class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
  
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    }
  
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        } else {
            console.log('Valor de saque inválido ou saldo insuficiente.');
        }
    }
  
    verSaldo() {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo}`);
    }
}
  
module.exports = { Conta };
  