import CarruselEducationBodyProps from './props';
import { carruselEducationBodyContainerStyle, imageStyle, universityStyle } from './style';

const CarruselEducationBody = (props:CarruselEducationBodyProps) => {
  const {
    university,
    description,
    imageSrc,
    imageAlt,
  } = props;

  return (
    <div className={carruselEducationBodyContainerStyle}>
      <img className={imageStyle} src={imageSrc} alt={imageAlt} />
      <p className={universityStyle}>{university}</p>
      <p>{description}</p>
    </div>
  );
};

export default CarruselEducationBody;
