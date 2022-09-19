import CarruselSimpleBodyProps from './props';
import { carruselSimpleBodyContainerStyle, imageStyle, titleStyle } from './style';

const CarruselSimpleBody = (props:CarruselSimpleBodyProps) => {
  const {
    title,
    imageSrc,
    imageAlt,
  } = props;

  return (
    <div className={carruselSimpleBodyContainerStyle}>
      <img className={imageStyle} src={imageSrc} alt={imageAlt} />
      <p className={titleStyle}>{title}</p>
    </div>
  );
};

export default CarruselSimpleBody;
