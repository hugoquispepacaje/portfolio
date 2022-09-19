import { Suspense, lazy } from 'react';
import Dock from '../../components/Dock';
import Modal from '../../components/Modal/Modal';
import Sidebar from '../../components/Sidebar';
import { screenBreak } from '../../helpers/constants';
import Footer from '../Footer';
import Hearder from '../Header';
import SpinnerContainer from '../SpinnerContainer';
import AppContainerStyle from './style';
import useAppContainer from './useAppContainer';

const Banner = lazy(() => import('../Banner'));
const Experience = lazy(() => import('../Experience'));
const Education = lazy(() => import('../Education'));

const AppContainer = () => {
  const {
    isSidebarActive,
    data,
    openSidebar,
    closeSidebar,
    widthScreen,
  } = useAppContainer();
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
          technologiesTitle={data.technologiesTitle}
          jobFunctionTitle={data.jobFunctionTitle}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Education
          id="edu"
          educationTitle={data.educationTitle}
          educations={data.educations}
          widthScreen={widthScreen || screenBreak.sm}
        />
      </Suspense>
      <Footer leftSide={data.footer.leftSide} rightSide={data.footer.rightSide} />
      <Sidebar menuItems={data.menu} visible={isSidebarActive} onHide={closeSidebar} />
      <Dock items={data.contact} className="hidden md:flex" />
      <Modal labelShowLess={data.labelShowLess} />
    </div>
  );
};

export default AppContainer;
