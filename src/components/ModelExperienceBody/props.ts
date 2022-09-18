interface ModalExperienceBodyProps {
  description: string;
  jobFunctionTitle: string;
  jobFunctions: string[];
  project: string,
}

const defaultModalExperienceBodyProps:ModalExperienceBodyProps = {
  description: '',
  jobFunctionTitle: '',
  jobFunctions: [],
  project: '',
};

export default ModalExperienceBodyProps;
export { defaultModalExperienceBodyProps };
