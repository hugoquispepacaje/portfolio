import { ModalSimpleItem } from '../../models/data';

interface TechnologyProps {
  id: string;
  technologyTitle: string;
  technologies: ModalSimpleItem[];
  widthScreen: number;
}

const defaultTechnologyProps:TechnologyProps = {
  id: '',
  technologyTitle: '',
  technologies: [],
  widthScreen: 0,
};

export default TechnologyProps;
export { defaultTechnologyProps };
