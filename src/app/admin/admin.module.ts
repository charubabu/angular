import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form/diet-plan-form.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
},
{
  path:"add-diet-plan",
  component: DietPlanFormComponent,
},
{
  path:"delete-diet-plan",
  component: DietPlanFormComponent,
  
}]

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class AdminModule { }
