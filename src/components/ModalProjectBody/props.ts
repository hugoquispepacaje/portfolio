interface ModalProjectBodyProps {
  project: string,
  description: string;
  technologyLabel: string;
  repositoryLabel: string;
  technologies: string[];
  urlGithub: string;
}

const defaultModalProjectBodyProps:ModalProjectBodyProps = {
  project: '',
  description: '',
  technologyLabel: '',
  repositoryLabel: '',
  technologies: [],
  urlGithub: '',
};

export default ModalProjectBodyProps;
export { defaultModalProjectBodyProps };
