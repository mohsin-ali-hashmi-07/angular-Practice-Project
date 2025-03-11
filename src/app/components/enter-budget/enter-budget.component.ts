import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-enter-budget',
  standalone: false,
  templateUrl: './enter-budget.component.html',
  styleUrl: './enter-budget.component.scss'
})
export class EnterBudgetComponent {
  amount: number = 0;
  incorrectNumber: boolean = false;

  constructor (private router:Router, private budgetService: BudgetService){}
  
  onHandleClick = () => {
    if(this.amount > 0) {
      this.budgetService.budget = this.amount;
      this.budgetService.rest = this.amount;

      this.incorrectNumber = false
      this.router.navigateByUrl("/expenses")
    }else{
      this.incorrectNumber = true
    }
  }

}
