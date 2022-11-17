import { Rect } from '../hooks/useFlipper';

export const invert = (delta: Rect, elem: HTMLElement) => {
  elem.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
  elem.style.transition = `transform 0s ease-in`;
};
