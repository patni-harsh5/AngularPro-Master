import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import {SharedModule} from './shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    
  ],
  exports: [
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule, SharedModule
  ],
  
})
export class ChildModule {}
