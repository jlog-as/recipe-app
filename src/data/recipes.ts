export interface Recipe {
  id: number;
  title: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  author: string;
  category: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Classic Homemade Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    time: '45 min',
    servings: 4,
    difficulty: 'Medium',
    author: 'Chef Maria',
    category: 'Dinner',
    description: 'A delicious homemade pizza with a crispy crust and fresh toppings.',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
    instructions: ['Preheat oven to 450°F', 'Roll out dough', 'Add toppings', 'Bake for 15-20 minutes']
  },
  {
    id: 2,
    title: 'Avocado Toast with Poached Eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    time: '15 min',
    servings: 2,
    difficulty: 'Easy',
    author: 'John Smith',
    category: 'Breakfast',
    description: 'Start your day with this nutritious and delicious breakfast.',
    ingredients: ['Sourdough bread', 'Avocado', 'Eggs', 'Salt', 'Pepper'],
    instructions: ['Toast bread', 'Mash avocado', 'Poach eggs', 'Assemble and season']
  },
  {
    id: 3,
    title: 'Berry Cheesecake',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    time: '3 hrs',
    servings: 8,
    difficulty: 'Hard',
    author: 'Sarah Wilson',
    category: 'Desserts',
    description: 'A creamy cheesecake topped with fresh mixed berries.',
    ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Mixed berries'],
    instructions: ['Make crust', 'Prepare filling', 'Bake', 'Chill', 'Top with berries']
  },
  {
    id: 4,
    title: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    time: '25 min',
    servings: 2,
    difficulty: 'Easy',
    author: 'Alex Green',
    category: 'Vegetarian',
    description: 'A healthy and filling quinoa bowl with Mediterranean flavors.',
    ingredients: ['Quinoa', 'Cherry tomatoes', 'Cucumber', 'Feta', 'Olive oil'],
    instructions: ['Cook quinoa', 'Chop vegetables', 'Mix ingredients', 'Add dressing']
  },
  {
    id: 5,
    title: '15-Minute Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    time: '15 min',
    servings: 4,
    difficulty: 'Easy',
    author: 'Lisa Chen',
    category: 'Quick & Easy',
    description: 'A quick and colorful pasta dish loaded with fresh vegetables.',
    ingredients: ['Pasta', 'Mixed vegetables', 'Garlic', 'Olive oil', 'Parmesan'],
    instructions: ['Boil pasta', 'Sauté vegetables', 'Combine', 'Add cheese']
  },
  {
    id: 6,
    title: 'Grilled Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    time: '30 min',
    servings: 2,
    difficulty: 'Medium',
    author: 'Mike Johnson',
    category: 'Dinner',
    description: 'Perfectly grilled salmon served with fresh asparagus.',
    ingredients: ['Salmon fillets', 'Asparagus', 'Lemon', 'Olive oil', 'Herbs'],
    instructions: ['Marinate salmon', 'Prepare asparagus', 'Grill both', 'Serve with lemon']
  },
  {
    id: 7,
    title: 'Spicy Thai Curry',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    time: '40 min',
    servings: 4,
    difficulty: 'Medium',
    author: 'Nina Patel',
    category: 'Dinner',
    description: 'A fragrant and spicy Thai curry with coconut milk.',
    ingredients: ['Coconut milk', 'Curry paste', 'Vegetables', 'Rice', 'Herbs'],
    instructions: ['Cook rice', 'Prepare curry', 'Simmer', 'Garnish and serve']
  },
  {
    id: 8,
    title: 'Chocolate Lava Cake',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    time: '25 min',
    servings: 2,
    difficulty: 'Medium',
    author: 'David Brown',
    category: 'Desserts',
    description: 'Decadent chocolate cake with a gooey center.',
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
    instructions: ['Melt chocolate', 'Mix ingredients', 'Bake', 'Serve warm']
  },
  {
    id: 9,
    title: 'Fresh Spring Rolls',
    image: 'https://images.unsplash.com/photo-1536510233921-8e5043fce771?auto=format&fit=crop&w=800&q=80',
    time: '30 min',
    servings: 4,
    difficulty: 'Medium',
    author: 'Kim Lee',
    category: 'Lunch',
    description: 'Healthy and fresh Vietnamese spring rolls with peanut sauce.',
    ingredients: ['Rice paper', 'Shrimp', 'Vegetables', 'Herbs', 'Peanut sauce'],
    instructions: ['Prepare filling', 'Soak rice paper', 'Roll', 'Make sauce']
  },
  {
    id: 10,
    title: 'Breakfast Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80',
    time: '10 min',
    servings: 1,
    difficulty: 'Easy',
    author: 'Emma Wilson',
    category: 'Breakfast',
    description: 'A nutritious smoothie bowl topped with fresh fruits and granola.',
    ingredients: ['Mixed berries', 'Banana', 'Yogurt', 'Granola', 'Honey'],
    instructions: ['Blend fruits', 'Pour in bowl', 'Add toppings', 'Serve immediately']
  }
];