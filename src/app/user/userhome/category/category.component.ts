import { Component } from '@angular/core';
import { NutritionService } from 'src/app/services/nutrition.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  searchText: any;
  types = [
    'All',
    'Dairy products',
    'Fats, Oils, Shortenings',
    'Meat, Poultry',
    'Fish, Seafood',
  ];
  selected = 'All';

  names: any;

  constructor(ns: NutritionService) {
    ns.getPro().subscribe({
      next: (data: any) => (this.names = data),
      error: () => (this.names = []),
    });
  }
}
