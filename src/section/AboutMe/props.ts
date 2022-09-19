interface AboutMeProps {
  id: string;
  aboutMeTitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const defaultAboutMeProps:AboutMeProps = {
  id: '',
  aboutMeTitle: '',
  description: '',
  imageUrl: '',
  imageAlt: '',
};

export default AboutMeProps;
export { defaultAboutMeProps };
