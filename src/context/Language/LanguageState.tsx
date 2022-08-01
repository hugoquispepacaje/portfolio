/* eslint no-console: ["error", { allow: ["error"] }] */
import { useReducer, useMemo } from 'react';
import LanguageContext, { initialState } from './LanguageContext';
import LanguageReducer from './LanguageReducer';
import SET_LANGUAGE from '../types';
import { LanguageStateProps } from './props';

const LanguageState = (props:LanguageStateProps) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  const { children } = props;

  const setLanguage = (languageLabel:string) => {
    try {
      dispatch({ type: SET_LANGUAGE, payload: { ...initialState, languageLabel } });
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    setLanguage,
  }), [state.languageLabel]);

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageState;
