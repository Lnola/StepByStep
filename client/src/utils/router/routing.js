import routes from '@/routes';

const findRouteByPathname = () => {
  const { pathname } = location;
  const route = routes.find(it => {
    if (!it.path.includes('/:')) return it.path === pathname;

    const splitPath = it.path.split('/');
    const splitPathname = pathname.split('/');
    if (splitPath.length !== splitPathname.length) return false;

    const areArraysEqual = splitPath.every((el, index) => {
      if (el.includes(':')) return true;
      return el === splitPathname[index];
    });

    return areArraysEqual;
  });

  return route;
};

export const isRoute = () => {
  return !!findRouteByPathname();
};

export const redirect = (name, id) => {
  const route = routes.find(it => it.name === name);
  if (!route) return redirect('Home');
  let path = route.path;
  let param = '';
  if (!!id) {
    path = path.split(':')[0];
    param = id;
  }
  location.replace(path + param);
};

export const isAuthRoute = () => {
  const route = findRouteByPathname();
  if (!route) return false;
  return route.name === 'Auth';
};

export const isAdminRoute = () => {
  const route = findRouteByPathname();
  if (!route) return false;
  return route.isAdmin;
};
