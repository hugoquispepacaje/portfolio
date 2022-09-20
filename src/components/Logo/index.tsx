import LogoProps, { defaultLogoProps } from './props';
import {
  logoStyle,
  titleStyle,
  logoWithTitleContainerStyle,
  logoSizeDefaultStyle,
} from './style';

const Logo = (props: LogoProps) => {
  const {
    logoSrc,
    logoAlt,
    title,
    sizeStyle,
  } = props;
  const className = sizeStyle
    ? logoStyle.concat(sizeStyle) : logoStyle.concat(logoSizeDefaultStyle);
  if (title) {
    return (
      <div className={logoWithTitleContainerStyle}>
        <h4 className={titleStyle}>{title}</h4>
        <img className={className} src={logoSrc} alt={logoAlt} />
      </div>
    );
  }
  return <img className={className} src={logoSrc} alt={logoAlt} />;
};

Logo.defaultProps = defaultLogoProps;

export default Logo;
