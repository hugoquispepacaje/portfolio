import { EducationItem } from '../../models/data';

interface EducationProps {
  id: string;
  educationTitle: string;
  educations: EducationItem[];
  widthScreen: number;
}

const defaultEducationProps:EducationProps = {
  id: '',
  educationTitle: '',
  educations: [],
  widthScreen: 0,
};

export default EducationProps;
export { defaultEducationProps };
