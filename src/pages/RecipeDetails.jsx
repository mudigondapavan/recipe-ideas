import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorFallback from '../components/ErrorFallback';

function RecipeDetails() {
  const recipe = useLoaderData();

  if (!recipe) {
    return <ErrorFallback message='No recipe found. Please try again.' />;
  }

  return (
    <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8'>
      <h2 className='text-2xl font-bold mb-4'>{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className='w-full h-64 object-cover rounded mb-6'
      />
      <p className='text-gray-700 mb-4'>{recipe.strInstructions}</p>
      <h4 className='text-lg font-semibold mb-2'>Ingredients:</h4>
      <ul className='list-disc list-inside'>
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key) => (
            <li key={key} className='text-gray-600'>
              {recipe[key]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function recipeDetailsLoader({ params }) {
  const { id } = params;
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) throw new Error('Failed to fetch recipe details.');

    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    throw new Error(
      'Could not load the recipe details. Please check your connection.'
    );
  }
}

export default RecipeDetails;
