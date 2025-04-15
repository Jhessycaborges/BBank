export class Account {
    private readonly name: string;
    private readonly accountNumber: number;
    protected balance: number = 0;
    private status: boolean = true;
  
    constructor(name: string, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }
  
    getName = (): string => {
      return this.name;
    }
  
    getAccountNumber = (): number => {
      return this.accountNumber;
    }
  
    getBalance = (): void => {
      console.log(`Saldo atual: R$${this.balance}`);
    }
  
    deposit = (amount: number): void => {
      if (this.validateStatus()) {
        this.balance += amount;
        console.log(`Depósito de R$${amount} realizado.`);
      }
    }
  
    withdraw = (amount: number): void => {
      if (this.validateStatus() && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Saque de R$${amount} realizado.`);
      } else {
        console.log("Saque negado: saldo insuficiente ou conta inativa.");
      }
    }
  
    protected validateStatus = (): boolean => {
      if (this.status) {
        return true;
      }
      throw new Error("Conta inválida");
    }
  }
  