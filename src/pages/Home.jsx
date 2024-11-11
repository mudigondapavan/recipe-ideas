import { useState } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import ErrorFallback from '../components/ErrorFallback';

function Home() {
  const recipes = useLoaderData();
  const navigate = useNavigate();
  // console.log(recipes);
  const [ingredient, setIngredient] = useState(''); //state for storing input

  const handleSearch = () => {
    // Redirect to the same page with the ingredient as a query parameter
    window.location.href = `/?ingredient=${ingredient}`;
    // navigate(`/?ingredient=${ingredient}`);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-8'>
      <SearchBar onSearch={handleSearch} setIngredient={setIngredient} />

      {recipes.length === 0 ? (
        <ErrorFallback message='No recipes found for the searched ingredient. Please try a different ingredient.' />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export async function recipesLoader({ request }) {
  const url = new URL(request.url);
  const ingredient = url.searchParams.get('ingredient') || '';

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) throw new Error('Failed to fetch recipes.');

    const data = await response.json();
    return data.meals || []; // Return an empty array if no meals found
  } catch (error) {
    throw new Error('Could not fetch recipes. Please try again.');
  }
}

export default Home;
