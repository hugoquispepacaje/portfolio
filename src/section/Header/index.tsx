import { useState, useContext, useEffect } from 'react';
import HeaderProps, { defaultHeaderProps } from './props';
import Navbar from '../../components/Navbar';
import headerStyle from './style';
import languages from '../../data/language';
import header from '../../data/header';
import LanguageContext from '../../context/Language/LanguageContext';
import Language from '../../models/language';

const Hearder = (props:HeaderProps) => {
  const { onButtonNavbarPress } = { ...defaultHeaderProps, ...props };
  const [language, setLanguage] = useState({});
  const { languageLabel, setLanguage: setLanguageLabel } = useContext(LanguageContext);

  useEffect(() => {
    const initialLanguage = languages.find((lang) => lang.label === languageLabel);
    setLanguage(initialLanguage || {});
  }, []);

  const onChangeLanguage = (value:Language) => {
    setLanguage(value);
    setLanguageLabel(value.label || '');
  };

  return (
    <header className={headerStyle}>
      <Navbar
        value={language}
        setValue={onChangeLanguage}
        options={languages}
        href={header.href}
        logoSrc={header.logoSrc}
        onButtonPress={onButtonNavbarPress}
        logoAlt={header.logoAlt}
      />
    </header>
  );
};

export default Hearder;
