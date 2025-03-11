import { Component } from '@angular/core';
import { Expense } from '../../../interfaces/expense';
import { BudgetService } from '../../../services/budget.service';

@Component({
  selector: 'app-add-expense',
  standalone: false,
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  name: string = '';
  amount: number = 0;

  constructor(private budgetService: BudgetService){}
  addExpense() {
    console.log("this.name", this.name)
    console.log(this.amount);
    const expense: Expense = {
      name: this.name,
      amount: this.amount
    }
    this.budgetService.addExpenses(expense)

    this.name = "";
    this.amount = 0;
  }
}
