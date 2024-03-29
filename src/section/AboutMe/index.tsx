import SectionCointainer from '../../components/SectionCointainer';
import AboutMeProps, { defaultAboutMeProps } from './props';
import { aboutMeConteinterStyle, descriptionStyle, imageStyle } from './style';

const AboutMe = (props:AboutMeProps) => {
  const {
    id,
    aboutMeTitle,
    description,
    imageUrl,
    imageAlt,
  } = props;
  return (
    <SectionCointainer
      id={id}
      title={aboutMeTitle}
    >
      <div className={aboutMeConteinterStyle}>
        <p className={descriptionStyle}>{description}</p>
        <img className={imageStyle} src={imageUrl} alt={imageAlt} />
      </div>
    </SectionCointainer>
  );
};

AboutMe.defaultProps = defaultAboutMeProps;

export default AboutMe;
