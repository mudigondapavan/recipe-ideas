import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-2">
          <h3 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h3>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;