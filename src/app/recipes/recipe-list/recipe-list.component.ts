import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a simply test",
      "http://pic1.cookiteasy.net/recipes/full/72/mayonnaise-cake-recipe_f4a.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "This is a simply test",
      "http://pic1.cookiteasy.net/recipes/full/72/mayonnaise-cake-recipe_f4a.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
