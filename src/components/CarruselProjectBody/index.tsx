import Button from '../Button';
import Logo from '../Logo';
import CarruselEducationBodyProps from './props';
import { carruselEducationBodyContainerStyle, imageStyle, titleProjectStyle } from './style';

const CarruselEducationBody = (props:CarruselEducationBodyProps) => {
  const {
    titleProject,
    logo,
    labelShowMore,
    onClickShowMore,
  } = props;

  return (
    <div className={carruselEducationBodyContainerStyle}>
      <Logo sizeStyle={imageStyle} logoSrc={logo.logoSrc} logoAlt={logo.logoAlt} />
      <p className={titleProjectStyle}>{titleProject}</p>
      <Button label={labelShowMore} onPress={onClickShowMore} />
    </div>
  );
};

export default CarruselEducationBody;
