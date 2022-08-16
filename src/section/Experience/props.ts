import { ExperienceItem } from '../../models/data';

interface ExperienceProps {
  id: string;
  experienceTitle: string;
  experiences: ExperienceItem[];
}

const defaultExperienceProps:ExperienceProps = {
  id: '',
  experienceTitle: '',
  experiences: [],
};

export default ExperienceProps;
export { defaultExperienceProps };
