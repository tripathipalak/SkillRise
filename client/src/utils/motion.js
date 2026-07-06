// Reusable Framer Motion variants — import these in any page/component
// instead of re-defining them, so animation style stays consistent site-wide.

// Basic fade + rise — most common, use for cards, text blocks, sections
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Opposite of fadeUp — comes down from above. Pair with fadeUp on a
// sibling element for a "converging" effect (e.g. heading drops down
// while subheading rises up, meeting in the middle).
export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeUpScale = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide in from left/right — useful for two-column sections
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Wrap a parent with this + children with any variant above
// to make children animate one after another automatically
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Spread this on any <motion.div {...buttonHover}> for consistent
// hover/tap "juice" on buttons across all pages
export const buttonHover = {
  whileHover: { scale: 1.06, y: -2 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};
