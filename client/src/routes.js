import Home from './components/home/Home.svelte';
import Auth from './components/auth/Auth.svelte';
import CreateRecipe from './components/recipes/CreateRecipe.svelte';
import { isAuthRoute, isRoute, redirect } from './utils/router/routing';
import { isLoggedIn } from './stores/auth';

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
