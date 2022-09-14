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
};

export default AppContainerProps;
export { defaultAppContainerProps, defaultAppData };
