import LanguageState from './context/Language/LanguageState';
import ModalState from './context/Modal/ModalState';
import AppContainer from './section/AppContainer';

const App = () => (
  <LanguageState>
    <ModalState>
      <AppContainer />
    </ModalState>
  </LanguageState>
);

export default App;
