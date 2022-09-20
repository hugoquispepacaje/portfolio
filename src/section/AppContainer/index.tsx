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
const Project = lazy(() => import('../Project'));
const Education = lazy(() => import('../Education'));
const Technology = lazy(() => import('../Technology'));
const Certification = lazy(() => import('../Certification'));
const AboutMe = lazy(() => import('../AboutMe'));
const Contact = lazy(() => import('../Contact'));

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
          id="experience"
          experienceTitle={data.experienceTitle}
          experiences={data.experiences}
          labelShowMore={data.labelShowMore}
          labelShowLess={data.labelShowLess}
          technologyLabel={data.technologyLabel}
          jobFunctionLabel={data.jobFunctionLabel}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Project
          id="project"
          technologyLabel={data.technologyLabel}
          repositoryLabel={data.repositoryLabel}
          projectTitle={data.projectTitle}
          projects={data.projects}
          labelShowMore={data.labelShowMore}
          widthScreen={widthScreen || screenBreak.sm}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Education
          id="education"
          educationTitle={data.educationTitle}
          educations={data.educations}
          widthScreen={widthScreen || screenBreak.sm}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Technology
          id="technology"
          technologyTitle={data.technologyTitle}
          technologies={data.technologies}
          widthScreen={widthScreen || screenBreak.sm}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Certification
          id="certification"
          certificationTitle={data.certificationTitle}
          certifications={data.certifications}
          widthScreen={widthScreen || screenBreak.sm}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <AboutMe
          id="about-me"
          aboutMeTitle={data.aboutMeTitle}
          description={data.aboutMe.description}
          imageUrl={data.aboutMe.imageUrl}
          imageAlt={data.aboutMe.imageAlt}
        />
      </Suspense>
      <Suspense fallback={<SpinnerContainer />}>
        <Contact
          id="about-me"
          contactTitle={data.contactTitle}
          contactSubtitle={data.contactSubtitle}
          contactItems={data.contact}
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
