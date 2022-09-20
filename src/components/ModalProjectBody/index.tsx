import ModalProjectBodyProps, { defaultModalProjectBodyProps } from './props';
import {
  projectTitleStyle,
  descriptionStyle,
  technologyTitleStyle,
  technologiesContainerStyle,
  technologyStyle,
  urlGithubStyle,
  urlContainerStyle,
} from './style';

const ModalProjectBody = (props:ModalProjectBodyProps) => {
  const {
    project,
    description,
    technologyLabel,
    repositoryLabel,
    technologies,
    urlGithub,
  } = props;
  const renderTechnologies = technologies.map(
    (technology) => (<li key={Math.random()} className={technologyStyle}>{technology}</li>),
  );
  const onPress = () => {
    window.open(urlGithub, '_blank');
  };
  return (
    <div>
      <h3 className={projectTitleStyle}>{project}</h3>
      <p className={descriptionStyle}>{description}</p>
      { technologies.length > 0
        ? (
          <>
            <p className={technologyTitleStyle}>{`${technologyLabel}:`}</p>
            <div className={technologiesContainerStyle}>
              <ul>
                {renderTechnologies}
              </ul>
            </div>
            <div className={urlContainerStyle}>
              <p>{`${repositoryLabel}:`}</p>
              <div onClick={() => onPress()} aria-hidden="true">
                <i className={urlGithubStyle} />
              </div>
            </div>
          </>
        ) : null}
    </div>
  );
};

ModalProjectBody.defaultProps = defaultModalProjectBodyProps;
export default ModalProjectBody;
