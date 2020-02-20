import App from './App.svelte';
import { cleanUrl } from './utils/cleanUrl';

cleanUrl();

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

window.app = app;

export default app;
