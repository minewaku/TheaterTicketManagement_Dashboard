import { createContext, useState } from 'react';

export const ThemeContext =  createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    const contextValue = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;