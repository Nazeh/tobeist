import App from './App.svelte';
import decorateUrl from './utils/decorateUrl';

decorateUrl();

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

window.app = app;

export default app;
