import { derived } from 'svelte/store';
import { authState } from 'rxfire/auth';
import { auth } from './utils/auth';

export const user = authState(auth);

export const isfetching = derived(user, $user => $user === undefined);
