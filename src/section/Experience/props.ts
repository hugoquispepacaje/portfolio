import { ExperienceItem } from '../../models/data';

interface ExperienceProps {
  id: string;
  experienceTitle: string;
  technologiesTitle: string;
  jobFunctionTitle: string;
  experiences: ExperienceItem[];
  labelShowMore: string;
  labelShowLess: string;
}

const defaultExperienceProps:ExperienceProps = {
  id: '',
  experienceTitle: '',
  technologiesTitle: '',
  jobFunctionTitle: '',
  experiences: [],
  labelShowMore: '',
  labelShowLess: '',
};

export default ExperienceProps;
export { defaultExperienceProps };
