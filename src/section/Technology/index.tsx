import Carrusel from '../../components/Carrusel';
import CarruselSimpleBody from '../../components/CarruselSimpleBody';
import SectionCointainer from '../../components/SectionCointainer';
import TechnologyProps, { defaultTechnologyProps } from './props';
import technologyContainerStyle from './style';

const Techonology = (props:TechnologyProps) => {
  const {
    id,
    technologyTitle,
    technologies,
    widthScreen,
  } = props;
  const renderTechonologies = technologies.map(
    (technology) => (
      <CarruselSimpleBody
        key={technology.id}
        title={technology.title}
        imageSrc={technology.imageSrc}
        imageAlt={technology.imageAlt}
      />
    ),
  );
  return (
    <SectionCointainer
      id={id}
      title={technologyTitle}
    >
      <div className={technologyContainerStyle}>
        <Carrusel widthScreen={widthScreen} itemsContent={renderTechonologies} />
      </div>
    </SectionCointainer>
  );
};

Techonology.defaultProps = defaultTechnologyProps;

export default Techonology;
