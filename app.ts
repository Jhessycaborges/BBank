import { Account } from './class/Account';
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { BonusAccount } from './class/BonusAccount';

const people = new PeopleAccount(1, 'Jhessyca', 1001);
people.deposit(100);
people.withdraw(50);
people.getBalance();

const company = new CompanyAccount('BorgesX Corp', 2002);
company.deposit(500);
company.getLoan(300);
company.getBalance();

const bonus = new BonusAccount('Conta Bônus', 3003);
bonus.deposit(100);
bonus.getBalance();