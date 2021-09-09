exports.seed = function (knex, Promise) {
  return knex("ingredient_quantities").insert([
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
  ]);
};
