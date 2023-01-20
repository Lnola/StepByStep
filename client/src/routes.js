import { isAdminRoute, isAuthRoute, isRoute, redirect } from './utils/router/routing';
import Auth from './components/auth/Auth.svelte';
import CreateRecipe from './components/recipes/CreateRecipe.svelte';
import Home from './components/home/Home.svelte';
import { isAdmin, isLoggedIn } from './stores/auth';
import RecipesPublished from './components/recipes/RecipesPublished.svelte';
import RecipesUser from './components/recipes/RecipesUser.svelte';
import UserList from './components/admin/UserList.svelte';

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
    component: CreateRecipe,
  },
  {
    path: '/admin',
    name: 'UserList',
    component: UserList,
  },
];

const beforeRoute = () => {
  if (!isRoute()) {
    return redirect('Home');
  }

  if (!isLoggedIn() && !isAuthRoute()) {
    return redirect('Auth');
  }

  if (isLoggedIn() && isAuthRoute()) {
    return redirect('Home');
  }

  if (isAdminRoute() && !isAdmin()) {
    return redirect('Home');
  }
};

export default routes;
export { beforeRoute };
