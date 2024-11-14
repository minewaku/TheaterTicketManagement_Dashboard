/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)", 
                secondary: "var(--color-secondary)", 
                tertiary: "var(--color-tertiary)", 
                base_bg: "var(--color-bg-base)",   
                primary_bg: "var(--color-bg-primary)", 
                secondary_bg: "var(--color-bg-secondary)", 
                layout_bg: "var(--color-bg-layout)",
                search_bg: "var(--color-bg-search)",
                bder: "var(--color-border)", 
                "bder-search": "var(--color-border-search)",
                txt: "var(--color-text-base)", 
                "search-icon": "var(--color-search-icon)",
                scrollbar: "var(--color-scrollbar)", 
                scrollbar__hover: "var(--color-scrollbar_hover)", 
                disabled: "var(--color-disabled)",
                purpleBlue: {
                    light: {
                        primary: "rgb(103, 58, 183)", // Primary base color
                        secondary: "rgb(33, 150, 243)", // Accent/secondary color
                        tertiary: "rgb(255, 193, 7)", // Tertiary color
                        base_bg: "rgb(255, 255, 255)",   // General background color
                        primary_bg: "rgb(237, 231, 246)", // Primary background
                        secondary_bg: "rgb(227, 242, 253)", // Secondary background
                        border: "#e5e7eb", // Border color
                        text: "#364152", // Text color
                        scrollbar: "#999", // Scrollbar color
                        scrollbar__hover: "#697586", // Scrollbar hover color
                    },
                    dark: {
                        primary: "rgb(103, 58, 183)", // Primary color
                        secondary: "rgb(33, 150, 243)", // Secondary color
                        tertiary: "rgb(255, 193, 7)", // Highlight
                        base_bg: "#121212", // Dark background
                        primary_bg: "#1E1E1E", // Dark primary background
                        secondary_bg: "#2A2A2A", // Dark secondary background
                        border: "#333", // Dark border
                        text: "#E0E0E0", // Light text on dark background
                        scrollbar: "#666", // Scrollbar color
                        scrollbar__hover: "#888", // Scrollbar hover color
                    },
                },
                ocean: {
                    light: {
                        primary: "rgb(0, 188, 212)", // Primary ocean color
                        secondary: "rgb(3, 169, 244)", // Light blue secondary
                        tertiary: "rgb(64, 196, 255)", // Cyan highlight
                        base_bg: "rgb(232, 245, 253)", // Light background
                        primary_bg: "rgb(207, 231, 245)", // Light primary background
                        secondary_bg: "rgb(178, 235, 242)", // Light secondary background
                        border: "#0288d1", // Light border
                        text: "#01579b", // Dark text
                        scrollbar: "#0097a7", // Scrollbar color
                        scrollbar__hover: "#00bcd4", // Scrollbar hover color
                    },
                    dark: {
                        primary: "rgb(0, 188, 212)", // Dark ocean primary
                        secondary: "rgb(3, 169, 244)", // Dark blue secondary
                        tertiary: "rgb(64, 196, 255)", // Cyan highlight
                        base_bg: "#0A1929", // Dark background
                        primary_bg: "#112F41", // Darker blue primary background
                        secondary_bg: "#145374", // Even darker secondary background
                        border: "#1B3B52", // Dark border
                        text: "#E0F7FA", // Light text
                        scrollbar: "#005662", // Scrollbar color
                        scrollbar__hover: "#0097a7", // Scrollbar hover color
                    },
                },
                sunset: {
                    light: {
                        primary: "rgb(255, 87, 34)", // Warm orange primary
                        secondary: "rgb(255, 193, 7)", // Warm yellow secondary
                        tertiary: "rgb(255, 235, 59)", // Yellow highlight
                        base_bg: "rgb(255, 243, 224)", // Light warm background
                        primary_bg: "rgb(255, 224, 178)", // Warm primary background
                        secondary_bg: "rgb(255, 204, 128)", // Warm secondary background
                        border: "#fdd835", // Light border
                        text: "#4e342e", // Warm text
                        scrollbar: "#d84315", // Scrollbar color
                        scrollbar__hover: "#ff7043", // Scrollbar hover color
                    },
                    dark: {
                        primary: "rgb(255, 87, 34)", // Orange primary
                        secondary: "rgb(255, 193, 7)", // Yellow secondary
                        tertiary: "rgb(255, 235, 59)", // Yellow highlight
                        base_bg: "#1C1C1C", // Dark background
                        primary_bg: "#3E2723", // Dark brown primary background
                        secondary_bg: "#5D4037", // Dark secondary background
                        border: "#795548", // Dark border
                        text: "#FFCCBC", // Light warm text
                        scrollbar: "#D84315", // Scrollbar color
                        scrollbar__hover: "#FF7043", // Scrollbar hover color
                    },
                },
                grayscale: {
                    light: {
                        primary: "#757575", // Medium gray primary
                        secondary: "#BDBDBD", // Light gray secondary
                        tertiary: "#E0E0E0", // Highlight gray
                        base_bg: "#FAFAFA", // Very light gray background
                        primary_bg: "#F5F5F5", // Light gray primary background
                        secondary_bg: "#EEEEEE", // Slightly darker secondary background
                        border: "#BDBDBD", // Gray border
                        text: "#212121", // Dark text
                        scrollbar: "#9E9E9E", // Scrollbar color
                        scrollbar__hover: "#757575", // Scrollbar hover color
                    },
                    dark: {
                        primary: "#757575", // Medium gray primary
                        secondary: "#BDBDBD", // Light gray secondary
                        tertiary: "#E0E0E0", // Light gray highlight
                        base_bg: "#121212", // Dark background
                        primary_bg: "#1E1E1E", // Dark primary background
                        secondary_bg: "#2C2C2C", // Dark secondary background
                        border: "#333", // Dark border
                        text: "#E0E0E0", // Light text
                        scrollbar: "#666", // Scrollbar color
                        scrollbar__hover: "#888", // Scrollbar hover color
                    },
                },
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"], 
    darkMode: "class",
}
