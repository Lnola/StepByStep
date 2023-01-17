import Home from './components/home/Home.svelte';
import Auth from './components/auth/Auth.svelte';
import RecipesPublished from './components/recipes/RecipesPublished.svelte';
import RecipesUser from './components/recipes/RecipesUser.svelte';
import { isLoggedIn } from './stores/auth';
import CreateRecipe from './components/recipes/CreateRecipe.svelte';
import { isAuthRoute, isRoute, redirect } from './utils/router/routing';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: RecipesPublished,
  },
  {
    path: '/recipes/user',
    name: 'UserRecipes',
    component: RecipesUser,
  },
  {
    path: '/recipes/create',
    name: 'CreateRecipe',
    component: CreateRecipe
  },
];

const beforeRoute = () => {
  const { pathname } = location;
  if (!isRoute(pathname)) return redirect('Home');

  if (!isLoggedIn() && !isAuthRoute()) {
    return redirect('Auth');
  }

  if (isLoggedIn() && isAuthRoute()) {
    return redirect('Home');
  }
};

export default routes;
export { beforeRoute };
