import { ExperienceItem } from '../../models/data';

interface CardExperienceBodyProps extends ExperienceItem {}

const defaultCardExperienceBodyProps:CardExperienceBodyProps = {
  id: 0,
  title: '',
  project: '',
  technologiesTitle: '',
  technologies: [],
  clientTitle: '',
  client: {
    id: 0,
    logoSrc: '',
    logoAlt: '',
  },
  employerTitle: '',
  employer: {
    id: 0,
    logoSrc: '',
    logoAlt: '',
  },
};

export default CardExperienceBodyProps;
export { defaultCardExperienceBodyProps };
