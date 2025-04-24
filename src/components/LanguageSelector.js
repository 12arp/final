import React, { useState, useEffect } from 'react';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const [isHindi, setIsHindi] = useState(false);

    useEffect(() => {
        // Initialize Google Translate
        if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
            );
        }
    }, []);

    const toggleLanguage = () => {
        setIsHindi(!isHindi);
        if (window.google && window.google.translate) {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = isHindi ? 'en' : 'hi';
                select.dispatchEvent(new Event('change'));
            }
        }
    };

    // Get the current language from Google Translate
    const getCurrentLanguage = () => {
        const select = document.querySelector('.goog-te-combo');
        return select ? select.value : 'en';
    };

    return (
        <div className="language-selector">
            <button 
                className="language-toggle-btn"
                onClick={toggleLanguage}
            >
                {getCurrentLanguage() === 'en' ? 'हिंदी' : 'English'}
            </button>
            <div id="google_translate_element" style={{ display: 'none' }}></div>
        </div>
    );
};

export default LanguageSelector; 