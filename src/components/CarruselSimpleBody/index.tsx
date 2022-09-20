import Logo from '../Logo';
import CarruselSimpleBodyProps from './props';
import { carruselSimpleBodyContainerStyle, imageStyle, titleStyle } from './style';

const CarruselSimpleBody = (props:CarruselSimpleBodyProps) => {
  const {
    title,
    logo,
  } = props;

  return (
    <div className={carruselSimpleBodyContainerStyle}>
      <Logo sizeStyle={imageStyle} logoSrc={logo.logoSrc} logoAlt={logo.logoAlt} />
      <p className={titleStyle}>{title}</p>
    </div>
  );
};

export default CarruselSimpleBody;
