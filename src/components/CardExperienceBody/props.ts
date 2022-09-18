import { ExperienceItem } from '../../models/data';

interface CardExperienceBodyProps extends ExperienceItem {
  labelShowMore: string;
  technologiesTitle: string;
  onClickShowMore: () => void;
}

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
  labelShowMore: 'Show More',
  onClickShowMore: () => null,
};

export default CardExperienceBodyProps;
export { defaultCardExperienceBodyProps };
