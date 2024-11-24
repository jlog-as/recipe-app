import { describe, it, expect } from 'vitest';
import { filterRecipesByCategory } from './recipeUtils';
import { Recipe } from '../data/recipes';

describe('Recipe Utils', () => {
  const mockRecipes: Recipe[] = [
    {
      id: 1,
      title: 'Test Recipe 1',
      category: 'Breakfast',
      image: 'test1.jpg',
      time: '20 min',
      servings: 2,
      difficulty: 'Easy',
      author: 'Test Author',
      description: 'Test description',
      ingredients: ['ingredient 1'],
      instructions: ['instruction 1']
    },
    {
      id: 2,
      title: 'Test Recipe 2',
      category: 'Dinner',
      image: 'test2.jpg',
      time: '30 min',
      servings: 4,
      difficulty: 'Medium',
      author: 'Test Author',
      description: 'Test description',
      ingredients: ['ingredient 1'],
      instructions: ['instruction 1']
    },
    {
      id: 3,
      title: 'Test Recipe 3',
      category: 'Breakfast',
      image: 'test3.jpg',
      time: '15 min',
      servings: 1,
      difficulty: 'Easy',
      author: 'Test Author',
      description: 'Test description',
      ingredients: ['ingredient 1'],
      instructions: ['instruction 1']
    }
  ];

  it('should return all recipes when category is "All"', () => {
    const result = filterRecipesByCategory(mockRecipes, 'All');
    expect(result).toHaveLength(3);
    expect(result).toEqual(mockRecipes);
  });

  it('should filter recipes by category correctly', () => {
    const result = filterRecipesByCategory(mockRecipes, 'Breakfast');
    expect(result).toHaveLength(2);
    expect(result.every(recipe => recipe.category === 'Breakfast')).toBe(true);
  });

  it('should return empty array for non-existent category', () => {
    const result = filterRecipesByCategory(mockRecipes, 'NonExistent');
    expect(result).toHaveLength(0);
  });

  it('should handle case-sensitive category matching', () => {
    const result = filterRecipesByCategory(mockRecipes, 'dinner');
    expect(result).toHaveLength(0);
    
    const correctResult = filterRecipesByCategory(mockRecipes, 'Dinner');
    expect(correctResult).toHaveLength(1);
  });
});