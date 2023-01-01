import routes from '@/routes';

export const isRoute = path => {
  return !!routes.find(route => route.path === path);
};
