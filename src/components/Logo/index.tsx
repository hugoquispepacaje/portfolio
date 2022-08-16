import LogoProps, { defaultLogoProps } from './props';
import { logoStyle, titleStyle, logoWithTitleContainerStyle } from './style';

const Logo = (props: LogoProps) => {
  const {
    logoSrc,
    logoAlt,
    title,
  } = props;

  if (title) {
    return (
      <div className={logoWithTitleContainerStyle}>
        <h4 className={titleStyle}>{title}</h4>
        <img className={logoStyle} src={logoSrc} alt={logoAlt} />
      </div>
    );
  }
  return <img className={logoStyle} src={logoSrc} alt={logoAlt} />;
};

Logo.defaultProps = defaultLogoProps;

export default Logo;
