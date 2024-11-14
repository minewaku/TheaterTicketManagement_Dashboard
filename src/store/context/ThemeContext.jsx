import { createContext, useState } from "react"

const ThemeContext = createContext()
const ThemeProvider = (props) => {
    const [theme, setTheme] = useState({mode: "light", theme: "purpleBlue"})
    const contextValue = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext
