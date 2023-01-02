import routes from '@/routes';

export const isRoute = pathname => {
  return !!routes.find(it => it.path === pathname);
};

export const redirect = name => {
  const route = routes.find(it => it.name === name);
  if (!route) return redirect('Home');
  location.replace(route.path);
};

export const isAuthRoute = () => {
  const { pathname } = location;
  const route = routes.find(it => it.path === pathname);
  return route.name === 'Auth';
};
