import React from 'react';
import { Clock, Users, ChefHat, BookmarkPlus } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  servings: number;
  difficulty: string;
  author: string;
  onClick: () => void;
}

export default function RecipeCard({
  title,
  image,
  time,
  servings,
  difficulty,
  author,
  onClick,
}: RecipeCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white">
          <BookmarkPlus className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">By {author}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{servings}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}