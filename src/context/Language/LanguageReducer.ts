import SET_LANGUAGE from '../types';
import { LanguageAction, LanguageState } from './props';

const saveInStorage = (languageLabel:string) => {
  localStorage.setItem('languageLabel', languageLabel);
};

const LanguageReducer = (state: LanguageState, action:LanguageAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      saveInStorage(payload.languageLabel);
      return {
        ...state,
        languageLabel: payload.languageLabel,
      };
    default:
      return state;
  }
};

export default LanguageReducer;
