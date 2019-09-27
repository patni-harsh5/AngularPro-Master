import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {RecipeData} from '../../shared/recipedata.service';
import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Pancake', 'This is a delicious Pancake', 'https://images.fineartamerica.com/images-medium-large-5/pancake-pug-linda-bailey.jpg');

  constructor(private recipeService: RecipeData) {
      
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
