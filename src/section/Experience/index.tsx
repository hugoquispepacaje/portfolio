import { useContext } from 'react';
import Card from '../../components/Card';
import CardExperienceBody from '../../components/CardExperienceBody';
import ModelExperienceBody from '../../components/ModelExperienceBody';
import SectionCointainer from '../../components/SectionCointainer';
import ModalContext from '../../context/Modal/ModalContext';
import { needShowMore } from '../../helpers/functions';
import { ExperienceItem } from '../../models/data';
import ExperienceProps, { defaultExperienceProps } from './props';
import { experienceContainerStyle } from './style';

const Experience = (props:ExperienceProps) => {
  const {
    id,
    experienceTitle,
    experiences,
    labelShowMore,
    labelShowLess,
    technologiesTitle,
    jobFunctionTitle,
  } = props;
  const { openModal } = useContext(ModalContext);
  const renderContent = (experience:ExperienceItem) => (
    <ModelExperienceBody
      jobFunctionTitle={jobFunctionTitle}
      jobFunctions={experience.jobFunctions}
      description={experience.description}
      project={experience.project}
    />
  );
  const renderExperiences = experiences.map((experience) => (
    <Card key={experience.id}>
      <CardExperienceBody
        id={experience.id}
        title={experience.title}
        project={experience.project}
        technologiesTitle={technologiesTitle}
        technologies={experience.technologies}
        clientTitle={experience.clientTitle}
        client={experience.client}
        employerTitle={experience.employerTitle}
        employer={experience.employer}
        labelShowMore={labelShowMore}
        onClickShowMore={() => openModal(renderContent(experience))}
      />
    </Card>
  ));
  return (
    <SectionCointainer
      id={id}
      title={experienceTitle}
      needShowMore={needShowMore(experiences.length)}
      labelShowMore={labelShowMore}
      labelShowLess={labelShowLess}
    >
      <div className={experienceContainerStyle}>
        {renderExperiences}
      </div>
    </SectionCointainer>
  );
};

Experience.defaultProps = defaultExperienceProps;

export default Experience;
