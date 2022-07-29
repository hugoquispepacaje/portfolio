import LanguageState from './context/Language/LanguageState';
import AppContainer from './section/AppContainer';

const App = () => {
  return (
    <LanguageState>
      <AppContainer />
    </LanguageState>
  )
}

export default App;
