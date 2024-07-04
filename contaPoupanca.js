const { Conta } = require("./contas");

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento = 0.02) {
        super(titular, saldo);
        this.rendimento = rendimento;
    }
  
    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento;
        console.log(`Rendimento aplicado. Novo saldo: R$${this.saldo}`);
    }
}

module.exports = { ContaPoupanca };