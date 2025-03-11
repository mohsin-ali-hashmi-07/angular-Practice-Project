import { Component, OnDestroy } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Subscription } from 'rxjs';
import { Expense } from '../../../interfaces/expense';

@Component({
  selector: 'app-list-expenses',
  standalone: false,
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent implements OnDestroy {
 budget: number = 0;
 rest: number =0;
 sub: Subscription;
 listExpenses: Expense[] = [];

 constructor(private budgetService: BudgetService){
  this.budget = this.budgetService.budget;
  this.rest = this.budgetService.rest;
  this.sub = this.budgetService.getExpense().subscribe(expense => this.listExpenses.push(expense))
 }

 ngOnDestroy(): void {
   this.sub.unsubscribe();
 }
}
