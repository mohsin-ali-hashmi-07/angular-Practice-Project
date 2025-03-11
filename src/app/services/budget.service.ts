import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  public budget: number = 0;
  public rest: number = 0;
  private expenses$=new Subject<Expense>();
  constructor() { }

  addExpenses (expense: Expense){
    this.expenses$.next(expense)
  }

  getExpense(): Observable<Expense>{
    return this.expenses$.asObservable();
  }
}
