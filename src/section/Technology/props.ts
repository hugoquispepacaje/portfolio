import { CarruselSimpleItem } from '../../models/data';

interface TechnologyProps {
  id: string;
  technologyTitle: string;
  technologies: CarruselSimpleItem[];
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
