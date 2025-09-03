/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "{./src/App.jsx}", // Make sure it scans your React files
  ],
  theme: {
    extend: {
      colors: {
        primaryIndigo: "#4F46E5",   // Tailwind indigo-600
        primaryPurple: "#8B5CF6",   // Tailwind purple-500
        bodyGray: "#4B5563",        // Tailwind gray-600
        headingGray: "#111827",     // Tailwind gray-900
        backgroundWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Default + Inter
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          lg: "1120px", // similar to max-w-6xl
        },
      },
    },
  },
plugins: [
  function ({ addComponents, theme }) {
    addComponents({
      ".btn-primary": {
        backgroundColor: theme("colors.primaryIndigo"),
        color: theme("colors.white"),
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.lg"),
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme("colors.indigo.600"),
        },
      },
      ".btn-secondary": {
        backgroundColor: theme("colors.gray.100"),
        color: theme("colors.gray.800"),
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.lg"),
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: theme("colors.gray.200"),
        },
      },
      ".btn-sm": {
        padding: `${theme("spacing.1")} ${theme("spacing.3")}`,
        fontSize: theme("fontSize.sm")[0],
      },
      ".btn-md": {
        padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
        fontSize: theme("fontSize.base")[0],
      },
      ".btn-lg": {
        padding: `${theme("spacing.3")} ${theme("spacing.6")}`,
        fontSize: theme("fontSize.lg")[0],
      },
      ".section-title": {
        fontSize: theme("fontSize.2xl")[0],
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.headingGray"),
        marginBottom: theme("spacing.6"),
      },
      ".card": {
        backgroundColor: theme("colors.white"),
        borderRadius: theme("borderRadius.lg"),
        padding: theme("spacing.6"),
        boxShadow: theme("boxShadow.md"),
        transition: "all 0.3s ease",
      },
    });
  },
],
}

