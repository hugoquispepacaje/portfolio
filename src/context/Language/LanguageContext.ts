import { createContext } from 'react';
import languages from '../../data/language';
import { LanguageState } from './props';

const getLanguageLabel = () : string => {
  const languageLabel = localStorage.getItem('languageLabel') ? localStorage.getItem('languageLabel') : languages[0].label;
  return (languageLabel || '');
};

export const initialState:LanguageState = {
  languageLabel: getLanguageLabel(),
  setLanguage: (languageLabel:string) => languageLabel || null,
};

const LanguageContext = createContext(initialState);

export default LanguageContext;
