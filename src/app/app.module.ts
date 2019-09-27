import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeData } from './shared/recipedata.service';
import { Recipe } from './shared/recipe.pipe';
import { LikeComponent } from './like/like.component';
import {ColorChanger} from './shared/colorchanger.directive';
import {DropdownDirective} from './shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    Recipe,
    LikeComponent,
    ColorChanger,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecipeData],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
