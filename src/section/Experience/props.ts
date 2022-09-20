import { ExperienceItem } from '../../models/data';

interface ExperienceProps {
  id: string;
  experienceTitle: string;
  technologyLabel: string;
  jobFunctionLabel: string;
  experiences: ExperienceItem[];
  labelShowMore: string;
  labelShowLess: string;
}

const defaultExperienceProps:ExperienceProps = {
  id: '',
  experienceTitle: '',
  technologyLabel: '',
  jobFunctionLabel: '',
  experiences: [],
  labelShowMore: '',
  labelShowLess: '',
};

export default ExperienceProps;
export { defaultExperienceProps };
