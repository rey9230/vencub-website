import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface LanguageSwitchProps {
    currentLanguage: string;
    onLanguageChange: (newLanguage: string) => void;
}

export default function LanguageSwitch(props: LanguageSwitchProps) {
    const { currentLanguage, onLanguageChange } = props;
    const { t } = useTranslation();

    const availableLanguages: Language[] = [
        { code: 'en', name: 'English', flag: '/images/flags/en.png' },
        { code: 'es', name: 'Español', flag: '/images/flags/es.png' },
    ];

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        onLanguageChange(newLanguage);
    };

    const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

    return (
        <div className="fab" onClick={toggleLanguage}>
            <Image
                src={currentLang?.flag ?? "/images/flags/en.png"}
                alt={currentLang?.name ?? "/images/flags/en.png"}
                width={30}
                height={20}
            />
            <style jsx>{`
                .fab {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #6200ee;
                    border-radius: 50%;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .fab:hover {
                    background-color: #3700b3;
                }
            `}</style>
        </div>
    );
}
