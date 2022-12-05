import "../styles/globals.css";

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  themes: {
    default: "orange",
    list: [
      { name: "orange", class: "theme-orange", color: "#ff6623" },
      { name: "blue", class: "theme-blue", color: "#133e8c" },
    ],
  },
  backgrounds: {
    default: "primary",
    values: [
      {
        name: "primary",
        value: "#f7eeea",
      },
    ],
  },
  options: {
    storySort: {
      order: ["Introduction", "Components"],
    },
  },
};
