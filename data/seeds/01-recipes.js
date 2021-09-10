const recipes = [
  { recipe_name: "Cincinnatti Chili" },
  { recipe_name: "Chili Cheese Fries" },
  { recipe_name: "California Burrito" },
  { recipe_name: "Ice Cream Cake" },
  { recipe_name: "Buffalo Chicken Dip" },
];

const ingredients = [
  { ingredient_name: "Chili" },
  { ingredient_name: "Cheese" },
  { ingredient_name: "Tortilla" },
  { ingredient_name: "Buffalo Sauce" },
  { ingredient_name: "Ice Cream" },
  { ingredient_name: "Chicken" },
  { ingredient_name: "Fries" },
  { ingredient_name: "Hamburger Patty" },
  { ingredient_name: "Avacado" },
  { ingredient_name: "Peanut Butter" },
];

const ingredient_quantities = [
  { ingredient_quantity: "1 cup", ingredient_id: 1, step_id: 10 },
  { ingredient_quantity: "1 2/3 cup", ingredient_id: 2, step_id: 9 },
  { ingredient_quantity: "1/2 cup", ingredient_id: 3, step_id: 8 },
  { ingredient_quantity: "a dash", ingredient_id: 4, step_id: 7 },
  { ingredient_quantity: "a scoop", ingredient_id: 5, step_id: 6 },
  { ingredient_quantity: "a smidge", ingredient_id: 6, step_id: 5 },
  {
    ingredient_quantity: "I don't know, just throw a handful in",
    ingredient_id: 7,
    step_id: 4,
  },
  {
    ingredient_quantity: "however much a goldfish weighs",
    ingredient_id: 8,
    step_id: 3,
  },
  { ingredient_quantity: "5 pounds", ingredient_id: 9, step_id: 2 },
  { ingredient_quantity: "1 gram", ingredient_id: 10, step_id: 1 },
];

const steps = [
  { step_number: 1, step_instructions: "FOLD IN", recipe_id: 1 },
  { step_number: 2, step_instructions: "Mix furiously", recipe_id: 2 },
  {
    step_number: 3,
    step_instructions: "Bake for as long as you can nap",
    recipe_id: 3,
  },
  {
    step_number: 4,
    step_instructions: "Pound it in to submission",
    recipe_id: 4,
  },
  {
    step_number: 5,
    step_instructions: "Blend with great contempt",
    recipe_id: 5,
  },
  {
    step_number: 6,
    step_instructions: "Slice, but don't dice",
    recipe_id: 1,
  },
  {
    step_number: 7,
    step_instructions: "Microwave until it bubbles",
    recipe_id: 2,
  },
  {
    step_number: 8,
    step_instructions: "Boil in milk that barely passes the sniff test",
    recipe_id: 3,
  },
  { step_number: 9, step_instructions: "Slather in butter", recipe_id: 4 },
  {
    step_number: 10,
    step_instructions: "...just go get takeout",
    recipe_id: 5,
  },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("ingredient_quantities").insert(ingredient_quantities);
};
