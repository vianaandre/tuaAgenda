export const theme = {
  spacing(size: number) {
    return `${size * 0.5}rem`;
  },
  colors: {
    PRIMARY: {
      0: '#FBF9FE',
      250: '#EAE4F5',
      500: '#5129A6',
      800: '#201042',
    },
    DANGER: '#E95432',
    WARNING: '#FAAD13',
    SUCCESS: '#0FAB60',
    INFO: '#00B8D9',
    SECONDARY: '#201042',
    GREY: {
      500: '#EAEAEA',
      600: '#D9D9D9',
      700: '#BCBCBC',
      800: '#9E9E9E',
      850: '#8F8F8F',
      900: '#818181',
      950: '#727272',
      1000: '#636363',
    },
    WHITE: '#FFFFFF',
    BLACK: {
      500: '#262626',
      1000: '#000000',
    },
  },
  fonts: {
    sizes: {
      56: '3.5rem',
      40: '2.5rem',
      32: '2rem',
      24: '1.5rem',
      20: '1.25rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
    },
    family: {
      PRIMARY: "'DM Sans', 'Inter', sans-serif",
      SECONDARY: "'Epilogue', 'DM Sans', 'Inter', sans-serif",
      ALTERNATIVE: "'Clash Display', 'DM Sans', 'Epilogue', 'Inter', sans-serif",
    },
    height: {
      100: '100%',
      125: '125%',
      150: '150%',
      160: '160%',
    },
  },
  zIndex: {
    BASE: 1010,
    DROPDOWN: 1015,
    MENU: 1020,
    OVERLAY: 1030,
    MODAL: 1040,
  },
  breakpoints: {
    mobile: '767px',
    tablet: '1024px',
    desktop: '1440px',
  },
};
