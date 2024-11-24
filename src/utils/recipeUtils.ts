export function filterRecipesByCategory(recipes: any[], category: string) {
  if (category === 'All') {
    return recipes;
  }
  return recipes.filter(recipe => recipe.category === category);
}