import App from './App.svelte';
import decorateUrl from './utils/decorateUrl';

decorateUrl();

const app = new App({ target: document.body });

window.app = app;

export default app;
