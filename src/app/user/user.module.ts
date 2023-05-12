import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DetailsComponent } from './userhome/details/details.component';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SupportedDietComponent } from './userhome/supported-diet/supported-diet.component';
import { BoxComponent } from './userhome/supported-diet/box/box.component';
import { CategoryComponent } from './userhome/category/category.component';
import { CategoryBoxComponent } from './userhome/category/category-box/category-box.component';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { DetailsBoxComponent } from './userhome/supported-diet/box/details-box/details-box.component';
import { CategoryDetailsComponent } from './userhome/category/category-box/category-details/category-details.component';
import { ContactComponent } from './userhome/contact/contact.component';
import { ForumComponent } from './userhome/forum/forum.component';
import { OwnComponent } from './userhome/own/own.component';
import { ForumBoxComponent } from './userhome/forum/forum-box/forum-box.component';
import { Header2Component } from '../admin/header2/header2.component';
import { AforumComponent } from '../admin/aforum/aforum.component';
import { Complaint2Component } from '../admin/complaint2/complaint2.component';
import { HttpClientModule } from '@angular/common/http';

const route:Routes=[
  {path: 'categorydetails/:id', component : CategoryDetailsComponent},
  {path: 'detailsbox/:id', component : DetailsBoxComponent},
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"sup",
      component: SupportedDietComponent,
    },
    {
      path:"cat",
      component: CategoryComponent,
    },
    {
      path:"feed",
      component: ContactComponent,
    },
    {
      path:"forum",
      component: ForumComponent
    },
    {
      path:"own",
      component: OwnComponent
    },
    {
      path: "forum2",
      component: AforumComponent
    },
    {
      path: 'complaints',
      component : Complaint2Component
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    DetailsComponent,
    ProductComponent,
    ProductrowComponent,
    SupportedDietComponent,
    BoxComponent,
    CategoryComponent,
    CategoryBoxComponent,
    FiltertypePipe,
    DetailsBoxComponent,
    CategoryDetailsComponent,
    ContactComponent,
    ForumComponent,
    OwnComponent,
    ForumBoxComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [RouterModule]
})
export class UserModule { }
