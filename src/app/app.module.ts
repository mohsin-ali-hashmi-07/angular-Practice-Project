import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AddExpenseComponent } from './components/expenses/add-expense/add-expense.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnterBudgetComponent,
    ExpensesComponent,
    AddExpenseComponent,
    ListExpensesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
