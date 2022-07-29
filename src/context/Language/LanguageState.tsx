import { useReducer } from 'react';
import LanguageContext, { initialState } from './LanguageContext';
import LanguageReducer from './LanguageReducer';
import { SET_LANGUAGE } from '../types';
import { LanguageStateProps } from './props';

const LanguageState = (props:LanguageStateProps) => {

  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  const setLanguage = ( languageLabel:string ) => {
    try {
      dispatch({ type: SET_LANGUAGE, payload: { ...initialState, languageLabel } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LanguageContext.Provider
      value={
        { ...state, 
          setLanguage
        }
      }
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageState;