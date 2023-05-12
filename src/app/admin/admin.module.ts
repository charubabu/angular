import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form/diet-plan-form.component';
import { AforumComponent } from './aforum/aforum.component';
import { Header2Component } from './header2/header2.component';
import { Complaint2Component } from './complaint2/complaint2.component';
import { CompComponent } from './complaint2/comp/comp.component';
import { MaterialModule } from '../material/material.module';
import { AforumBoxComponent } from './aforum/aforum-box/aforum-box.component';


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
  
},
{
  path:"complaints",
  component:Complaint2Component
}
]

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent,
    AforumComponent,
    Complaint2Component,
    CompComponent,
    AforumBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    Ng2SearchPipeModule,
    MaterialModule

    
  ]
})
export class AdminModule { }
