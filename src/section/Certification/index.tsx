import Carrusel from '../../components/Carrusel';
import CarruselSimpleBody from '../../components/CarruselSimpleBody';
import SectionCointainer from '../../components/SectionCointainer';
import CertificationProps, { defaultCertificationProps } from './props';
import technologyContainerStyle from './style';

const Certification = (props:CertificationProps) => {
  const {
    id,
    certificationTitle,
    certifications,
    widthScreen,
  } = props;
  const renderCertifications = certifications.map(
    (certification) => (
      <CarruselSimpleBody
        key={certification.id}
        title={certification.title}
        logo={certification.logo}
      />
    ),
  );
  return (
    <SectionCointainer
      id={id}
      title={certificationTitle}
    >
      <div className={technologyContainerStyle}>
        <Carrusel widthScreen={widthScreen} itemsContent={renderCertifications} />
      </div>
    </SectionCointainer>
  );
};

Certification.defaultProps = defaultCertificationProps;

export default Certification;
