import GUI from 'lil-gui';

export const _GUI = new GUI();
const props = {
  cubeSpeed: 0.01,
  toursSpeed: 0.01,
};

_GUI.add(props, 'cubeSpeed', -0.2, 0.2, 0.01);
_GUI.add(props, 'toursSpeed', -0.2, 0.2, 0.01);
