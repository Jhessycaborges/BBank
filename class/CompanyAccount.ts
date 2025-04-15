import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Empréstimo de R$${amount} concedido.`);
    }
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Depósito de R$${amount} realizado pela empresa.`);
    }
  }
}