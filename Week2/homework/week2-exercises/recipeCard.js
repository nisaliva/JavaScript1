'use strict';

let myMealRecipe = {
    'title': 'Omelete',
    'serves': 2,
    'ingredients': ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']
};

console.log('Meal name: ' + myMealRecipe.title);
console.log('Servings: ' + myMealRecipe.serves);
console.log('Ingredients:');
for (let i = 0; i < myMealRecipe.ingredients.length; i++) {
    console.log(myMealRecipe.ingredients[i]);
}