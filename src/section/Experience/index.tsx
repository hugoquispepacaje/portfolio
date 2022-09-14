import Card from '../../components/Card';
import CardExperienceBody from '../../components/CardExperienceBody';
import SectionCointainer from '../../components/SectionCointainer';
import { needShowMore } from '../../helpers/functions';
import ExperienceProps, { defaultExperienceProps } from './props';
import { experienceContainerStyle } from './style';

const Experience = (props:ExperienceProps) => {
  const {
    id,
    experienceTitle,
    experiences,
    labelShowMore,
    labelShowLess,
  } = props;
  const renderExperiences = experiences.map((experience) => (
    <Card key={experience.id}>
      <CardExperienceBody
        id={experience.id}
        title={experience.title}
        project={experience.project}
        technologiesTitle={experience.technologiesTitle}
        technologies={experience.technologies}
        clientTitle={experience.clientTitle}
        client={experience.client}
        employerTitle={experience.employerTitle}
        employer={experience.employer}
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
