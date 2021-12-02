import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function persistInStorage(theme) {
    localStorage.setItem('ees-cpg-theme', JSON.stringify(theme));
}

export default function useThemeContext() {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const themeHasBeenSet = localStorage.getItem('ees-cpg-theme');
        if (themeHasBeenSet) setTheme(JSON.parse(themeHasBeenSet));
    }, []);

    useEffect(() => {
        persistInStorage(theme);
    }, [theme]);

    return { ThemeContext, theme, setTheme };
}