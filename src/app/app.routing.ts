import {RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const AppRouting = RouterModule.forRoot([
    {path:'recipe', component:RecipesComponent},
    {path:'shopping', component: ShoppingListComponent}
])