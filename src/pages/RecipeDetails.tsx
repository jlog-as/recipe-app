import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';
import { RECIPES } from '../data/recipes';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = RECIPES.find(r => r.id === Number(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="relative h-96">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white -mt-20 relative rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
          <p className="text-gray-600 mb-4">By {recipe.author}</p>

          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{recipe.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}