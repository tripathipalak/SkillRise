export const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const zoomIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};