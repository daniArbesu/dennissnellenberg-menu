// easein function "easeInOutQuart" cubic bezier from easings.net
export const menuSlide = {
  initial: { x: '100%' },
  animate: { x: '0%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: '100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};
