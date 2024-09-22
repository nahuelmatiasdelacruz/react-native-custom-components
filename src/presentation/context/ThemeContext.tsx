import {createContext, PropsWithChildren, useState} from 'react';
import {ThemeColors} from '../../domain/interfaces/theme.interface';
import {lightColors, darkColors} from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme,setCurrentTheme] = useState<ThemeColor>('light');
  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };
  return (
    <ThemeContext.Provider
      value={{currentTheme, colors: currentTheme === 'light' ? lightColors : darkColors, setTheme, isDark: (currentTheme === 'dark') }}>
      {children}
    </ThemeContext.Provider>
  );
};
