import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {

  }
  private recipes: Recipe[] = [
    new Recipe('Burger', 'So Delecious!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/220px-Big_Mac_hamburger.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]),
    new Recipe('Fry Rice', 'Do you like it?', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160206-fried-rice-food-lab-68-thumb-1500xauto-429632.jpg',
      [new Ingredient('Egg', 4), new Ingredient('Bean', 3)])
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  transferToShoppingList(recipe: Recipe) {
    this.shoppingListService.AddIngredients(recipe.ingredients);
  }
}
