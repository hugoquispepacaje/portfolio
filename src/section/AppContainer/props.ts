interface AppContainerProps {}

const defaultAppContainerProps:AppContainerProps = {};

const defaultAppData = {
  labelShowMore: '',
  labelShowLess: '',
  menu: [],
  banner: {
    name: '',
    degree: '',
    specialty: '',
    imageSrc: '',
    imageAlt: '',
  },
  contact: [],
  experienceTitle: '',
  experiences: [],
  technologiesTitle: '',
  jobFunctionTitle: '',
  educationTitle: '',
  educations: [],
  footer: {
    leftSide: '',
    rightSide: '',
  },
  aboutMeTitle: '',
  aboutMe: {
    description: '',
    imageUrl: '',
    imageAlt: '',
  },
};

export default AppContainerProps;
export { defaultAppContainerProps, defaultAppData };
