class Recipes {
  constructor(
    id,
    user,
    title,
    instructions,
    photo,
    ingredients,
    difficulty,
    steps,
  ) {
    this.id = id
    this.user = user;
    this.title = title;
    this.instructions = instructions;
    this.photo = photo;
    this.ingredients = ingredients;
    this.difficulty = difficulty;
    this.steps = steps;
  }
}

export default Recipes;
