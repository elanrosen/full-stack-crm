import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#ea9f8d",
      200: "#e68d78",
      300: "#e37b62",
      400: "#df684c",
      500: "#d24726", // Main primary color
      600: "#a7381e",
      700: "#91311a",
      800: "#7c2a16",
      900: "#501b0f",
    },
    brandScheme: {
      100: "#ea9f8d",
      200: "#df684c",
      300: "#df684c",
      400: "#df684c",
      500: "#d24726", // Main primary color
      600: "#a7381e",
      700: "#91311a",
      800: "#7c2a16",
      900: "#91311a",
    },
    brandTabs: {
      100: "#ea9f8d",
      200: "#e68d78",
      300: "#e68d78",
      400: "#e68d78",
      500: "#e68d78",
      600: "#a7381e",
      700: "#91311a",
      800: "#7c2a16",
      900: "#91311a",
    },    
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      400: "#5c80ff",
      500: "#01B574",
    },
    navy: {
      50: "#f8d6d4", // Light pinkish-red, analogous to the lightest navy shade
      100: "#f4b1ae", // Soft red
      200: "#ef8d89", // Slightly deeper red
      300: "#eb6863", // Medium red, getting warmer
      400: "#e7433d", // Brighter red, analogous to mid-range navy
      500: "#e31e18", // Primary dark red shade, similar in depth to navy 500
      600: "#b71813", // Darker red, less bright
      700: "#8b130f", // Deep red, similar in tone to navy 700
      800: "#5f0e0b", // Very dark red, analogous to navy 800
      900: "#330808", // Almost maroon, similar to the deepest navy shade
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: 'Verdana, sans-serif', // Set Verdana as the font family
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: 'Verdana, sans-serif', // Set Verdana as the font family
      },
    }),
  },
};
