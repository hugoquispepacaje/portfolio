import { useState, useContext, useEffect } from 'react'
import HeaderProps, { defaultHeaderProps } from './props';
import Navbar from '../../components/Navbar';
import { headerStyle } from './style';
import languages from '../../data/language';
import header from '../../data/header';
import LanguageContext from '../../context/Language/LanguageContext';
import Language from '../../models/language';

const Hearder = ( props:HeaderProps) => {
  props = { ...defaultHeaderProps, ...props };
  const [ language, setLanguage ] = useState({});
  const { languageLabel, setLanguage: setLanguageLabel } = useContext(LanguageContext);

  useEffect(()=>{
    const language = languages.find(language=>language.label === languageLabel);
    setLanguage(language ? language : {});
  }, []);

  const onChangeLanguage = (value:Language)  => {
    setLanguage(value);
    setLanguageLabel(value.label ? value.label : '');
  };

  return (
    <header className={headerStyle}>
      <Navbar
        value={language}
        setValue={onChangeLanguage}
        options= {languages}
        href= {header.href}
        logoSrc= {header.logoSrc}
        onButtonPress={props.onButtonNavbarPress}
      />
    </header>
  )
}

export default Hearder;