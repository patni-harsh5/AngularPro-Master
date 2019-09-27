import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe';

@Injectable()
export class RecipeData {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg', new Date('09/27/2019'), new Date('10/12/2019'), 30, 100),
        new Recipe('Summer Salad', 'Okayish', 'http://images.media-allrecipes.com/userphotos/960x960/4552561.jpg', new Date('09/25/2019'), new Date('10/25/2019') , 20, 200)
    ];
    
    constructor() {}
    
    getRecipes(){
        return this.recipes;
    }
}