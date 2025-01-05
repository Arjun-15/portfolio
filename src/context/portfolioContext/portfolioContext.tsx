import React, { createContext, ReactNode, useState, useContext } from "react";

// Define the interface for the theme context
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the context with default value as undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props type for the ThemeProvider component
interface ThemeProviderProps {
    children: ReactNode;
}

// Create the ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use the ThemeContext easily
export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
};
