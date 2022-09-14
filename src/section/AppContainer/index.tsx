import { Carousel } from '@trendyol-js/react-carousel';
import {
  useState,
  useContext,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import Card from '../../components/Card';
import Dock from '../../components/Dock';
import Sidebar from '../../components/Sidebar';
import LanguageContext from '../../context/Language/LanguageContext';
import languageData from '../../data/data';
import { Data } from '../../models/data';
import Hearder from '../Header';
import SpinnerContainer from '../SpinnerContainer';
import { defaultAppData } from './props';
import AppContainerStyle from './style';

const Banner = lazy(() => import('../Banner'));
const Experience = lazy(() => import('../Experience'));

const AppContainer = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [data, setData] = useState<Data>(defaultAppData);

  const openSidebar = () => {
    setIsSidebarActive(true);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  const { languageLabel } = useContext(LanguageContext);

  useEffect(() => {
    const languageDataComplete = languageData.find((item) => item.languageLabel === languageLabel);
    if (languageDataComplete) {
      setData(languageDataComplete.data);
    }
  }, [languageLabel]);

  return (
    <div className={AppContainerStyle}>
      <Hearder onButtonNavbarPress={openSidebar} />
      <Suspense fallback={<SpinnerContainer />}>
        <Banner id="home" data={data.banner} />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Experience
          id="exp"
          experienceTitle={data.experienceTitle}
          experiences={data.experiences}
          labelShowMore={data.labelShowMore}
          labelShowLess={data.labelShowLess}
        />
      </Suspense>
      <Sidebar menuItems={data.menu} visible={isSidebarActive} onHide={closeSidebar} />
      <Dock items={data.contact} className="hidden md:flex" />
      <div className='container m-auto'>
        <Carousel show={3} slide={2} transition={0.5}>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
          <Card>
            <h3>Hola</h3>
          </Card>
        </Carousel>
      </div>
    </div>
  );
};

export default AppContainer;
