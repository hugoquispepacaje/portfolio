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
  technologyLabel: '',
  jobFunctionLabel: '',
  repositoryLabel: '',
  projectTitle: '',
  projects: [],
  educationTitle: '',
  educations: [],
  certificationTitle: '',
  certifications: [],
  technologyTitle: '',
  technologies: [],
  aboutMeTitle: '',
  aboutMe: {
    description: '',
    imageUrl: '',
    imageAlt: '',
  },
  contactTitle: '',
  contactSubtitle: '',
  footer: {
    leftSide: '',
    rightSide: '',
  },
};

export default AppContainerProps;
export { defaultAppContainerProps, defaultAppData };
