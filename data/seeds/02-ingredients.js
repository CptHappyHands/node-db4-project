exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
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
  ]);
};
