import routes from '@/routes';

const findRouteByPathname = () => {
  const { pathname } = location;
  routes.find(it => it.path === pathname);
};

export const isRoute = () => {
  return !!findRouteByPathname();
};

export const redirect = name => {
  const route = routes.find(it => it.name === name);
  if (!route) return redirect('Home');
  location.replace(route.path);
};

export const isAuthRoute = () => {
  const route = findRouteByPathname();
  if (!route) return false;
  return route.name === 'Auth';
};
