import { ProjectItem } from '../../models/data';

interface ProjectProps {
  id: string;
  projectTitle: string;
  technologyLabel: string;
  repositoryLabel: string;
  projects: ProjectItem[];
  labelShowMore: string;
  widthScreen: number;
}

const defaultProjectProps:ProjectProps = {
  id: '',
  projectTitle: '',
  technologyLabel: '',
  repositoryLabel: '',
  projects: [],
  labelShowMore: '',
  widthScreen: 0,
};

export default ProjectProps;
export { defaultProjectProps };
