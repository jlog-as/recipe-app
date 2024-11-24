import React from 'react';
import { Search, PlusCircle, ChefHat } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-800">RecipeShare</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
            <PlusCircle className="w-5 h-5" />
            <span>Share Recipe</span>
          </button>
        </div>
      </div>
    </header>
  );
}