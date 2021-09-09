exports.seed = function (knex, Promise) {
  return knex("steps").insert([
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
      recipe_id: 6,
    },
    {
      step_number: 7,
      step_instructions: "Microwave until it bubbles",
      recipe_id: 7,
    },
    {
      step_number: 8,
      step_instructions: "Boil in milk that barely passes the sniff test",
      recipe_id: 8,
    },
    { step_number: 9, step_instructions: "Slather in butter", recipe_id: 9 },
    {
      step_number: 10,
      step_instructions: "...just go get takeout",
      recipe_id: 10,
    },
  ]);
};
