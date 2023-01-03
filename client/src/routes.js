import Browse from './components/browseRecipes/Browse.svelte';
import Home from './components/home/Home.svelte';

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
];

const beforeRoute = () => {
  const { pathname } = location;
  console.log(pathname);
};

export default routes;
export { beforeRoute };
