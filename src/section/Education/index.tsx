import Carrusel from '../../components/Carrusel';
import CarruselEducationBody from '../../components/CarruselEducationBody';
import SectionCointainer from '../../components/SectionCointainer';
import EducationProps, { defaultEducationProps } from './props';
import { educationContainerStyle } from './style';

const Experience = (props:EducationProps) => {
  const {
    id,
    educationTitle,
    educations,
    widthScreen,
  } = props;
  const renderEducations = educations.map(
    (education) => (
      <CarruselEducationBody
        key={education.id}
        university={education.university}
        description={education.description}
        imageSrc={education.imageSrc}
        imageAlt={education.imageAlt}
      />
    ),
  );
  return (
    <SectionCointainer
      id={id}
      title={educationTitle}
    >
      <div className={educationContainerStyle}>
        <Carrusel widthScreen={widthScreen} itemsContent={renderEducations} />
      </div>
    </SectionCointainer>
  );
};

Experience.defaultProps = defaultEducationProps;

export default Experience;
