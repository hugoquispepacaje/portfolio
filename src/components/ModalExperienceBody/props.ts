interface ModalExperienceBodyProps {
  description: string;
  jobFunctionLabel: string;
  jobFunctions: string[];
  project: string,
}

const defaultModalExperienceBodyProps:ModalExperienceBodyProps = {
  description: '',
  jobFunctionLabel: '',
  jobFunctions: [],
  project: '',
};

export default ModalExperienceBodyProps;
export { defaultModalExperienceBodyProps };
