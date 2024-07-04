const { Conta } = require("./contas");

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros = 0.01) {
        super(titular, saldo);
        this.juros = juros;
    }
  
    aplicarJuros() {
        this.saldo += this.saldo * this.juros;
        console.log(`Juros aplicados. Novo saldo: R$${this.saldo}`);
    }
}

module.exports = { ContaCorrente };