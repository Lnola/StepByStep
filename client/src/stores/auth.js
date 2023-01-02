import { writable } from 'svelte/store';
import { authApi } from '@/api';
import { redirect } from '@/utils/router/routing';

export const user = writable(JSON.parse(localStorage.user || null));
user.subscribe(value => (localStorage.user = JSON.stringify(value)));

export const isLoggedIn = () => {
  let val;
  user.subscribe(value => (val = value));
  return !!val;
};

export const logout = async () => {
  await authApi.logout();
  user.set(null);
  redirect('Auth');
};
