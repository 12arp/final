import React from 'react';
import './LanguagePrompt.css';

const LanguagePrompt = ({ onLanguageSelect }) => {
    return (
        <div id="language-prompt" className="language-prompt">
            <div className="language-prompt-container">
                <div className="logo-container">
                    <img src="/images/logo.png" alt="Sahu Metals Kota" className="logo" />
                </div>
                <h1 className="lang-prompt-title">Welcome to Sahu Metals Kota</h1>
                <p className="lang-prompt-subtitle">Please select your language / कृपया अपनी भाषा चुनें</p>
                <div className="language-buttons">
                    <button onClick={() => onLanguageSelect('en')} className="lang-btn">English</button>
                    <button onClick={() => onLanguageSelect('hi')} className="lang-btn">हिंदी</button>
                </div>
            </div>
        </div>
    );
};

export default LanguagePrompt; 