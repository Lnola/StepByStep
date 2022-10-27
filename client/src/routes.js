import Home from './components/home/Home.svelte';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const beforeRoute = () => {
  const { pathname } = location;
  console.log(pathname);
};

export default routes;
export { beforeRoute };
