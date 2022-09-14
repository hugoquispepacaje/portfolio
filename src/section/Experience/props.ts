import { ExperienceItem } from '../../models/data';

interface ExperienceProps {
  id: string;
  experienceTitle: string;
  experiences: ExperienceItem[];
  labelShowMore: string;
  labelShowLess: string;
}

const defaultExperienceProps:ExperienceProps = {
  id: '',
  experienceTitle: '',
  experiences: [],
  labelShowMore: '',
  labelShowLess: '',
};

export default ExperienceProps;
export { defaultExperienceProps };
