import Home from './components/home/Home.svelte';
import { isRoute, redirect } from './utils/routing';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const beforeRoute = () => {
  const { pathname } = location;
  if (!isRoute(pathname)) redirect('Home');
};

export default routes;
export { beforeRoute };
