export const COLOR = {
  white: "#ffffff",
  black: "#524A4E",
  green: "#219F94",
};

export const FONT = {
  primary: "Quicksand, sans-serif",
};

export const SCREEN = {
  tablet: "(min-width: 650px)", // portrait tablet
  laptop: "(min-width: 960px)", // landscape tablet to small laptop
  desktop: "(min-width: 1520px)", // large laptop to desktop
  cursor: "not all and (pointer: coarse)", // non touchscreen device - prevent hover with our finger touch, i'm bothered :P
};

// framer motion animate on scroll
export const whileInView = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// framer motion variants props
export const animateContainer = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const animateItem = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};
