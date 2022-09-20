import Button from '../Button';
import Logo from '../Logo';
import TitleText from '../TitleText';
import CardExperienceBodyProps, { defaultCardExperienceBodyProps } from './props';
import {
  cardExperienceBodyStyle,
  technologieContainerStyle,
  experienceContainerStyle,
  employerContainer,
  clientContainer,
  projectStyle,
  technologiesTitleStyle,
} from './style';

const CardExperienceBody = (props: CardExperienceBodyProps) => {
  const {
    id,
    title,
    project,
    technologyLabel,
    technologies,
    clientTitle,
    client,
    employerTitle,
    employer,
    labelShowMore,
    onClickShowMore,
  } = props;

  const renderTechnologies = technologies.map((tech) => (
    <Logo
      key={tech.id}
      logoSrc={tech.logoSrc}
      logoAlt={tech.logoAlt}
    />
  ));

  return (
    <div className={cardExperienceBodyStyle} id={`experience_${id.toString()}`}>
      <TitleText title={title} />
      <p className={projectStyle}>{project}</p>
      <p className={technologiesTitleStyle}>{technologyLabel}</p>
      <div className={technologieContainerStyle}>{ renderTechnologies }</div>
      <div className={experienceContainerStyle}>
        <div className={employerContainer}>
          <Logo
            logoSrc={employer.logoSrc}
            logoAlt={employer.logoAlt}
            title={employerTitle}
          />
        </div>
        <div className={clientContainer}>
          <Logo
            logoSrc={client.logoSrc}
            logoAlt={client.logoAlt}
            title={clientTitle}
          />
        </div>
      </div>
      <Button label={labelShowMore} onPress={onClickShowMore} />
    </div>
  );
};

CardExperienceBody.defaultProps = defaultCardExperienceBodyProps;

export default CardExperienceBody;
