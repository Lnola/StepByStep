import Home from './components/home/Home.svelte';
import Auth from './components/auth/Auth.svelte';
import { isRoute, redirect } from './utils/router/routing';

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
];

const beforeRoute = () => {
  const { pathname } = location;
  if (!isRoute(pathname)) redirect('Home');
};

export default routes;
export { beforeRoute };
