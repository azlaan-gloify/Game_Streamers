import { Rect } from '../hooks/useFlipper';

const getDelta = (start: Rect, target: Rect) => ({
  top: start.top - target.top,
  left: start.left - target.left,
});

export default getDelta;
