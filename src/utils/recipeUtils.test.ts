import { describe, it, expect } from 'vitest';
import { filterRecipesByCategory } from './recipeUtils';

describe('Recipe Utils', () => {
  const mockRecipes = [
    { id: 1, category: 'Breakfast', title: 'Test Recipe 1' },
    { id: 2, category: 'Dinner', title: 'Test Recipe 2' },
    { id: 3, category: 'Breakfast', title: 'Test Recipe 3' },
  ];

  it('should return all recipes when category is "All"', () => {
    const result = filterRecipesByCategory(mockRecipes, 'All');
    expect(result).toHaveLength(3);
    expect(result).toEqual(mockRecipes);
  });

  it('should filter recipes by category', () => {
    const result = filterRecipesByCategory(mockRecipes, 'Breakfast');
    expect(result).toHaveLength(2);
    expect(result.every(recipe => recipe.category === 'Breakfast')).toBe(true);
  });
});