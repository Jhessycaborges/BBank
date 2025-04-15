import { Account } from "./Account";

export class BonusAccount extends Account {
  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount + 10;
      console.log(`Depósito com bônus: R$${amount + 10}`);
    }
  }
}