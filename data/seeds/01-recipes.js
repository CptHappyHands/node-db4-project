exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Cincinnatti Chili" },
    { recipe_name: "Chili Cheese Fries" },
    { recipe_name: "California Burrito" },
    { recipe_name: "Ice Cream Cake" },
    { recipe_name: "Buffalo Chicken Dip" },
  ]);
};
