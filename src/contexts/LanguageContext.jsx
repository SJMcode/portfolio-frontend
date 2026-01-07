import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children })
{
    const [language, setLanguage] = useState(() =>
    {
        // Check localStorage first, default to 'en'
        const savedLanguage = localStorage.getItem('portfolio-language');
        return savedLanguage || 'en';
    });

    useEffect(() =>
    {
        // Save to localStorage
        localStorage.setItem('portfolio-language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage()
{
    const context = useContext(LanguageContext);
    if (!context)
    {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
