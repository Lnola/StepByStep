import { writable } from 'svelte/store';

export const user = writable(JSON.parse(localStorage.user || null));
user.subscribe(value => (localStorage.user = JSON.stringify(value)));
