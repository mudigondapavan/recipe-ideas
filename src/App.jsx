import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home, { recipesLoader } from './pages/Home';
import RecipeDetails, { recipeDetailsLoader } from './pages/RecipeDetails';
import ErrorFallback from './components/ErrorFallback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: recipesLoader,
        errorElement: (
          <ErrorFallback message='Something went wrong. Please try again later.' />
        ),
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetails />,
        loader: recipeDetailsLoader,
        errorElement: (
          <ErrorFallback message='Failed to load recipe details. Please check your internet connection.' />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
