import { isAuthRoute, isRoute, redirect } from './utils/router/routing';

import Auth from './components/auth/Auth.svelte';
import Browse from './components/browseRecipes/Browse.svelte';
import BrowseUserRecipes from './components/browseUserRecipes/BrowseUserRecipes.svelte';
import Home from './components/home/Home.svelte';
import { isLoggedIn } from './stores/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/browse',
    name: 'Recipes',
    component: Browse,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/userRecipes',
    name: 'UserRecipes',
    component: BrowseUserRecipes,
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
