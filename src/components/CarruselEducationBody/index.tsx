import Logo from '../Logo';
import CarruselEducationBodyProps from './props';
import { carruselEducationBodyContainerStyle, imageStyle, universityStyle } from './style';

const CarruselEducationBody = (props:CarruselEducationBodyProps) => {
  const {
    university,
    description,
    logo,
  } = props;

  return (
    <div className={carruselEducationBodyContainerStyle}>
      <Logo sizeStyle={imageStyle} logoSrc={logo.logoSrc} logoAlt={logo.logoAlt} />
      <p className={universityStyle}>{university}</p>
      <p>{description}</p>
    </div>
  );
};

export default CarruselEducationBody;
