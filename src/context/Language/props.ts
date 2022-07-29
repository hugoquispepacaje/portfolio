interface LanguageState {
  languageLabel: string;
  setLanguage: (languageLabel:string) => void;
};

interface LanguageAction {
  type: string;
  payload: LanguageState;
};

interface LanguageStateProps {
  children: JSX.Element;
};


export {
  type LanguageState,
  type LanguageAction,
  type LanguageStateProps,
}