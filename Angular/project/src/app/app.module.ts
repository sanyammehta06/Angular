import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CreateComponent } from './create/create.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';


const appRoute : Routes = [
{path: '' , component:HomeComponent},
{path : 'products' , component:ProductsComponent},
{path:'create' , component:CreateComponent},
{path:'contact' , component:ContactComponent},
{path:'members' , component:MembersComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CreateComponent,
    
    MembersComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule ,FormsModule,RouterModule.forRoot(appRoute),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
