import React, { createContext, useState } from 'react';

export interface IContextProps {
    theme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IContextProps);


const ThemeContextProvider = (props: any) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = (): void => {
        setTheme(!theme);
    }

    if (theme) {
        document.body.classList.add("dark-body");
    } else {
        document.body.classList.remove("dark-body");
    }


    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>

}

export default ThemeContextProvider;