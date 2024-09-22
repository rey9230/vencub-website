'use client'

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../utils/i18n'; // Ensure the path to your i18n file is correct
import { useTranslation } from 'react-i18next';
import PageIllustration from '@/components/page-illustration';
import Footer from '@/components/ui/footer';
import LanguageSwitch from "@/components/ui/language-switcher";
//import LanguageSwitch from '@/components/language-switch'; // Adjust the path as necessary

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (newLanguage: string) => {
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        });
    }, []);

    return (
        <>
            <main className="grow">
                <PageIllustration />
                {/*<LanguageSwitch language={language} onLanguageChange={handleLanguageChange} />*/}
                {children}
            </main>
            {/* Floating Action Button for Language Switch */}
            <LanguageSwitch
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
            />
            <Footer />
        </>
    );
}
