import ModalExperienceBodyProps, { defaultModalExperienceBodyProps } from './props';
import {
  projectTitleStyle,
  descriptionStyle,
  jobFunctionContainerStyle,
  jobFunctionStyle,
  jobFunctionTitleStyle,
} from './style';

const ModalExperienceBody = (props:ModalExperienceBodyProps) => {
  const {
    description,
    jobFunctionLabel,
    jobFunctions,
    project,
  } = props;
  const renderJobFunctions = jobFunctions.map(
    (jobFunction) => (<li key={Math.random()} className={jobFunctionStyle}>{jobFunction}</li>),
  );
  return (
    <div>
      <h3 className={projectTitleStyle}>{project}</h3>
      <p className={descriptionStyle}>{description}</p>
      { jobFunctions.length > 0
        ? (
          <>
            <p className={jobFunctionTitleStyle}>{`${jobFunctionLabel}:`}</p>
            <div className={jobFunctionContainerStyle}>
              <ul>
                {renderJobFunctions}
              </ul>
            </div>
          </>
        ) : null}
    </div>
  );
};

ModalExperienceBody.defaultProps = defaultModalExperienceBodyProps;
export default ModalExperienceBody;
