import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  standalone: false,
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent implements OnInit {
  constructor(private budgetService: BudgetService, private router: Router){

  }
  ngOnInit(): void {
    if(this.budgetService.budget === 0){
      this.router.navigate(['/enter-budget'])
    }
  }
}
