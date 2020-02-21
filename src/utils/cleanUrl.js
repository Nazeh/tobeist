export const cleanUrl = () => {
  try {
    window.history.pushState('', '', '/app');
  } catch {
    console.warn('Your browser does not support pushState()');
  }
};
