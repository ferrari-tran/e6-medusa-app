const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "rgb(102, 102, 102)",
      secondary: "rgb(241, 138, 0)",
      teriary: "#fff",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      current: "currentColor",
      ...defaultTheme.colors
    },
    screen: {
      md: '750px',
      lg: '990px',
      xl: '1400px'
    },
    container: {
      padding: {
        DEFAULT: '10px',
        md: '20px',
        lg: '20px',
        xl: '20px'
      },
      center: true,
      screens: {
        md: '100%',
        lg: '100%',
        xl: '1180px'
      }
    },
    extend: {
      fontSize: {
        "2xs": "0.5rem", // 8px
        sm: "0.75rem", // 12px
        base: "1rem", // 16px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
        "5xl": "3rem", // 48px
      },
      lineHeight: {
        none: "0",
        tight: "1.125", // can use for heading
        normal: "1.375", // with base 16px is 22px
        relaxed: "1.75", // optional
        loose: "2", // optional
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        review: "calc(100vh - 10rem)",
      },
      boxShadow: {
        DEFAULT:
          "0 2px 5px 0 rgba(60, 66, 87, 0.08), 0 0 0 1px rgba(60, 66, 87, 0.16), 0 1px 1px rgba(0, 0, 0, 0.12)",
        error:
          "0 2px 5px 0 rgba(255, 155, 155, 0.08), 0 0 0 1px rgba(255, 155, 155, 0.70), 0 1px 1px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        green: {
          DEFAULT: "#56FBB1",
        },
        blue: {
          DEFAULT: "#0A3149",
        },
        ui: {
          light: "#F7F7FA",
          DEFAULT: "#EEF0F5",
          medium: "#D9DFE8",
          dark: "#89959C",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
