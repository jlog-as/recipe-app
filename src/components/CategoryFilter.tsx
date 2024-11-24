import React from 'react';

const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts',
  'Vegetarian',
  'Quick & Easy',
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
            selected === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}