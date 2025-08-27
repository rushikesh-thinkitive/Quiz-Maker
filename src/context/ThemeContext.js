import { createContext, useState } from "react";

//1) Create context
const ThemeContext = createContext();

//2) Provide context
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=>{
        setTheme( (prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;