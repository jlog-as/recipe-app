import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './pages/RecipeDetails';
import { RECIPES } from './data/recipes';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = RECIPES.filter(recipe => 
    selectedCategory === 'All' ? true : recipe.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Recipes</h2>
          <CategoryFilter 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              time={recipe.time}
              servings={recipe.servings}
              difficulty={recipe.difficulty}
              author={recipe.author}
              onClick={() => window.location.href = `/recipe/${recipe.id}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;