import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children })
{
    const [theme, setTheme] = useState(() =>
    {
        // Check localStorage first, default to 'dark'
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme || 'dark';
    });

    useEffect(() =>
    {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () =>
    {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme()
{
    const context = useContext(ThemeContext);
    if (!context)
    {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
