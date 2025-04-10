export const animate = (callback: () => void): void => {
  // Request animation frame for smooth animation
  window.requestAnimationFrame(() => animate(callback));

  // Call the callback function to update the scene
  callback();
};
