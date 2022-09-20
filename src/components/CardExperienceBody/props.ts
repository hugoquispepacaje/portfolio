import { ExperienceItem } from '../../models/data';

interface CardExperienceBodyProps extends ExperienceItem {
  labelShowMore: string;
  technologyLabel: string;
  onClickShowMore: () => void;
}

const defaultCardExperienceBodyProps:CardExperienceBodyProps = {
  id: 0,
  title: '',
  project: '',
  technologyLabel: '',
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
