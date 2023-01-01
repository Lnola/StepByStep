import routes from '@/routes';

export const isRoute = path => {
  return !!routes.find(route => route.path === path);
};

export const redirect = name => {
  const route = routes.find(it => it.name === name);
  if (!route) return redirect('Home');
  location.replace(route.path);
};
