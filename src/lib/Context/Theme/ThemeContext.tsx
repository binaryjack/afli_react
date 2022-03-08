import React, {
  createContext,
  FC,
  useState,
} from 'react';

export type IContextProps = {
  theme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IContextProps>({
  theme: false,
  toggleTheme: () => { },
});

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = (): void => {
    setTheme(!theme);
  };

  if (theme) {
    document.body.classList.add('dark-body');
  } else {
    document.body.classList.remove('dark-body');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
